# # This is the code file for Left No Crumbs

import requests
import sys

# Set the encoding to UTF-8 to handle non-ASCII characters
# sys.stdout.reconfigure(encoding='utf-8')

def search_yelp(api_key, term, location):    # function def
    base_url = "https://api.yelp.com/v3/businesses/search"
    headers = {
        "Authorization": "Bearer {}".format(api_key)    # creates dictionary with Authorization header
    }
    params = {
        "term": term,
        "location": location
    }

    try:
        response = requests.get(base_url, headers=headers, params=params)
        data = response.json()    # converts API response into json object, assigns to data var

        if "businesses" in data:
            businesses = data["businesses"]
            for i, business in enumerate(businesses, start=1):
                print("{}. {}".format(i, business['name']))
                print("   Rating: {}".format(business['rating']))
                address = ', '.join(business['location']['display_address'])
                print("   Address: {}".format(address))
                phone = business.get('phone', 'N/A')
                print("   Phone: {}".format(phone))
                print()
        else:
            error_description = data['error']['description']
            print("Error: {}".format(error_description))

    except Exception as e:
        error_message = "An error occurred: {}".format(str(e))
        print(error_message)

if __name__ == "__main__":
    api_key = "Nk6Ol2gaJtmVROVFG7gQu2FGkpyaTSvpN-QsCD5yn8a1q9Bcs4VwtsfQnYuzTYNynHaMRezU-7zE0DKVJ0zy6k6xkhrmaLLMTLZ8FYoR1-ZIJlXVSZGh-prVTEUoZXYx"
    term = input("Enter a search term (e.g., 'restaurant', 'coffee', 'pizza'): ")
    location = input("Enter a location (e.g., 'New York City', 'San Francisco'): ")

    search_yelp(api_key, term.encode('utf-8'), location.encode('utf-8'))
