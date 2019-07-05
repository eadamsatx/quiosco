import requests
import json

austin_city_id='4671654'
api_key='61749a4b7d52024e142f23d4e8ebdb22'

current_weather_base_uri='https://api.openweathermap.org/data/2.5/weather'

units = 'imperial'

uri = f'{current_weather_base_uri}?appid={api_key}&id={austin_city_id}' \
    f'&units={units}'

response = requests.get(uri)

response_json = response.json()

print(f'Current temp is {response_json["main"]["temp"]}')

pass
