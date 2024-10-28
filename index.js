const express = require('express');
const app = express();
const port = 3000;

const foodData = {
  flavors: {
    spicy: 'Spicy',
    sweet: 'Sweet',
    sour: 'Sour',
    salty: 'Salty'
  },
  dishes: {
    mains: {
      spicy: 'spicy noodle',
      sweet: 'white rice',
      sour: 'tomato basil pasta',
      salty: 'shoyu ramen'
    },
    protein: {
      spicy: 'mapo tofu',
      sweet: 'sukiyaki beef',
      sour: 'greek grilled fish',
      salty: 'grilled chicken'
    }
  },
  cuisine: {
    italian: {
      mains: 'funghi tagliatelle',
      side: 'grilled vegetables'
    },
    japanese: {
      mains: 'miso ramen',
      side: 'sashimi'
    },
    chinese: {
      mains: 'Chongqing Noodles',
      side: 'pickled radish'
    },
    greek: {
      mains: 'moussaka',
      side: 'horiatiki salad'
    }
  }
};


app.get('/food/:foodType', (req, res) => {
  const foodType = req.params.foodType;
  const flavor = req.query.flavor || 'salty'; 
  const recommendation = foodData.dishes[foodType] && foodData.dishes[foodType][flavor];

  if (recommendation) {
    res.json({ recommendation: recommendation });
  } else {
    res.status(404).json({ error: 'Recommendation not found' });
  }
});

app.get('/cuisine/:foodType/:cuisineStyle', (req, res) => {
  const foodType = req.params.foodType;
  const cuisineStyle = req.params.cuisineStyle;
  const recommendation = foodData.cuisine[cuisineStyle] && foodData.cuisine[cuisineStyle][foodType];

  if (recommendation) {
    res.json({ recommendation: recommendation });
  } else {
    res.status(404).json({ error: 'Cuisine recommendation not found' });
  }
});

app.get('/recommend/:foodType/:cuisineStyle', (req, res) => {
  const foodType = req.params.foodType;
  const cuisineStyle = req.params.cuisineStyle;
  const flavor = req.query.flavor || 'salty';
  const flavorRecommendation = foodData.dishes[foodType] && foodData.dishes[foodType][flavor];
  const cuisineRecommendation = foodData.cuisine[cuisineStyle] && foodData.cuisine[cuisineStyle][foodType];

  if (flavorRecommendation && cuisineRecommendation) {
    res.json({ recommendation: `${flavorRecommendation} and ${cuisineStyle} specialty ${cuisineRecommendation}` });
  } else {
    res.status(404).json({ error: 'Combined recommendation not found' });
  }
});

app.listen(port, () => {
  console.log(`Food Recommendation API is running at http://localhost:${port}`);
});
