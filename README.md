## Live API

The API is live at [https://node-module.onrender.com](https://node-module.onrender.com).

## Example Endpoints

- **Get a recommendation by flavor and food type:**
  - `GET` `/food/mains?flavor=spicy`
  - Example: [https://node-module.onrender.com/food/mains?flavor=spicy](https://node-module.onrender.com/food/mains?flavor=spicy)

- **Get a recommendation by food type and cuisine style:**
  - `GET` `/cuisine/mains/japanese`
  - Example: [https://node-module.onrender.com/cuisine/mains/japanese](https://node-module.onrender.com/cuisine/mains/japanese)

- **Get a combined recommendation by flavor, food type, and cuisine style:**
  - `GET` `/recommend/mains/japanese?flavor=sweet`
  - Example: [https://node-module.onrender.com/recommend/mains/japanese?flavor=sweet](https://node-module.onrender.com/recommend/mains/japanese?flavor=sweet)
