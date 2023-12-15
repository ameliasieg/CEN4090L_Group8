from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/search_yelp": {"origins": "http://localhost:3000"}})


@app.route('/search_yelp', methods=['POST'])

def search_yelp():
    data = request.json
    term = data['term']
    location = data['location']

    api_key = "Nk6Ol2gaJtmVROVFG7gQu2FGkpyaTSvpN-QsCD5yn8a1q9Bcs4VwtsfQnYuzTYNynHaMRezU-7zE0DKVJ0zy6k6xkhrmaLLMTLZ8FYoR1-ZIJlXVSZGh-prVTEUoZXYx"  
    base_url = "https://api.yelp.com/v3/businesses/search"
    headers = {"Authorization": f"Bearer {api_key}"}
    params = {"term": term, "location": location}

    response = requests.get(base_url, headers=headers, params=params)
    businesses = response.json().get('businesses', [])

    results = []
    for business in businesses:
        results.append({
            'name': business['name'],
            'rating': business['rating'],
            'address': ', '.join(business['location']['display_address']),
            'phone': business.get('phone', 'N/A'),
            'url' : business.get('url'),
            'price': business.get('price', 'N/A')
            
        })

    return jsonify(results)  

if __name__ == "__main__":
    app.run(debug=True)
    
if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000)
