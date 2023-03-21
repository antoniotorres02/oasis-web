import requests
from bs4 import BeautifulSoup


url="https://graficame.com/"

response = requests.get(url)

soup = BeautifulSoup(response.content, 'html.parser')
contenido = soup.prettify()
print("======================== HTML ==========================")
print(contenido)


css = soup.find('.css').get_text()

print("======================== CSS ==========================")
print(css)

 