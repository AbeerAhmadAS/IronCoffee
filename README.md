# IronCoffees App

Welcome to the IronCoffees app, where we celebrate the love for coffee within the Ironhack community! Our mission is to showcase some of the best-handcrafted coffees enjoyed by Ironhackers and allow users to contribute their favorites to the community.

## Getting Started

To get started with the IronCoffees app, you can visit the deployed version at [IronCoffees App](https://ironcoffees-app.herokuapp.com/).

## Project Overview

### Technologies Used

- Angular
- Heroku (for API deployment)

### API Endpoint

The API (server) for our app is hosted on Heroku, and the root URL is: [https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees](https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees).

#### Available Endpoints

- **GET /:** Get all the coffees from the database.
- **GET /:id:** Get details of a specific coffee by ID.
- **GET /random:** Get details of a random coffee.
- **POST /new:** Create a new coffee.
- **GET /search?q={query}:** Search for coffees by name.

### Project Features

1. **Home Page:**
   - Links to navigate to different sections:
     - `/coffees`: Display all coffees.
     - `/random-coffee`: Display a random coffee.
     - `/new-coffee`: Create a new coffee.

2. **List all Coffees (/coffees):**
   - Display all coffees from the database.
   - Displayed Information:
     - Image
     - Name
     - Tagline
     - Contributed By
   - Link to view details of each coffee.

3. **Single Coffee (/coffees/:coffeeId):**
   - Detailed view of a selected coffee.
   - Displayed Information:
     - Image
     - Name
     - Tagline
     - First Roasted
     - Strength Level
     - Description
     - Contributed By

4. **Random Coffee (/random-coffee):**
   - Display details of a random coffee.

5. **New Coffee (/new-coffee):**
   - Form to create a new coffee.
   - Form Fields:
     - Name
     - Tagline
     - Description
     - First Roasted
     - Roaster Tips
     - Strength Level
     - Contributed By
   - POST request to add a new coffee.

6. **Filter Coffees (/coffees):**
   - Bonus feature: Search for coffees by name.
   - Input for users to search for coffees.

### Use Case Diagram

![Use Case Diagram]([ntitled (6).png](https://github.com/AbeerAhmadAS/IronCoffee/blob/3d0a0ccbd70caf55061a8b2cf53256733802dd9e/Untitled%20(6).png))

### Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/ironcoffees-app.git`
2. Navigate to the project folder: `cd ironcoffees-app`
3. Install dependencies: `npm install`
4. Start the development server: `ng serve`

Visit [http://localhost:4200/](http://localhost:4200/) in your browser to explore the app.

## Contributors

- [HUDAAYOUB](https://github.com/HUDAAYOUB)
- [ZainabAlsadah](https://github.com/ZainabAlsadah)
- [ThurayaAlfahmi](https://github.com/ThurayaAlfahmi)
- [YumnaAlansari](https://github.com/YumnaAlansari)
- [AbeerAhmadAS](https://github.com/AbeerAhmadAS)

## Acknowledgments

Special thanks to the Ironhack community for the love of coffee and inspiration for this project!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
