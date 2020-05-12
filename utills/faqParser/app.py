# - *- coding: utf- 8 - *-

import urllib2
import json
from bs4 import BeautifulSoup
from datetime import date

faq = []
source = "https://www.gov.pl/web/koronawirus/pytania-i-odpowiedzi"

def faq_item( item_type, text, reply ):
    global faq

    # update previous
    if faq and faq[-1]:
        prev_item = faq[-1]
        if prev_item['type'] == 'details':
            if text == '':
                prev_item['content']['reply'] = prev_item['content']['reply'] + reply + "\n"
                return
        if prev_item['type'] == item_type:
            if item_type == 'subtitle' or item_type == 'title':
                prev_item['content']['text'] = prev_item['content']['text'] + text + "\n"
                return
    # insert new
    faq.append( 
        {
            'content': {
                'text': text,
                'reply': reply
            },
            'type': item_type
        }
    )

if __name__ == "__main__":
    response = urllib2.urlopen(source)
    if 200 == response.getcode():

        # source
        html = response.read()
        html = html.replace('&nbsp;', ' ')
        html = html.replace(', a interesujące nas sprawy można zlokalizować, korzystając z wyszukiwarki', '')
        soup = BeautifulSoup(html, 'html.parser')
        
        # intro
        element = soup.select("#main-content p.intro")
        faq_item( 'intro', element[0].text, '' )
        
        # sections
        sections = soup.select("#main-content div.editor-content")
        for section in sections:
        
            #  elements
            elements = section.find_all(['h3', 'h4', 'p', 'ul', 'ol', 'details'])
            for i, element in enumerate(elements):
                if element.getText().strip():
                    if element.name == 'h3':
                        faq_item( 'title', element.text, '' )

                    elif element.name == 'details' or element.find_parent('details'):
                        if element.find('summary'):
                            faq_item( 'details', element.find('summary').getText(strip=True), '' )
                        else:
                            text = element.getText()
                            text = text.replace( 'COVID-19', '[url]COVID-19|https://www.gov.pl/web/koronawirus[url]' )
                            links = element.find_all('a')
                            for j, link in enumerate(links):
                                label = link.getText()
                                url = link.get('href')
                                text = text.replace( label, '[url]' + label + '|' + url + '[url]' )
                            faq_item( 'details', '', text )
                    
                    elif element.name == 'h4':
                        faq_item( 'paragraph_strong', element.getText(), '' )

                    elif element.name == 'p' and element.find('strong'):
                        faq_item( 'paragraph_strong', element.getText(), '' )

                    else:
                        faq_item( 'paragraph', element.getText(), '' )

        # faq: lines + watermark
        elements = {}
        elements['elements'] = faq
        elements['watermark'] = date.today().strftime("%Y-%m-%d") + ' - ' + source

        # json
        file = open("faq.json", mode="w")
        file.write(json.dumps(elements, ensure_ascii=False).encode('utf-8'))
        file.close()
