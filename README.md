# 🧠🍽️ Squire — AI-Powered Nutrition Planner

**Squire** is your intelligent nutrition companion — an AI-driven meal planner that tracks your macronutrients, understands your cravings, and generates personalized recipes based on what you have at home.

---

## 🚀 Overview

**Squire** goes beyond traditional calorie tracking.  
It leverages cutting-edge AI to analyze your diet, available ingredients, and cravings — then creates **tailored recipes** that perfectly fit your nutritional goals for the day.

By combining **Gemini’s generative AI** with real-world grocery data from **Knot API**, Squire provides a seamless, personalized meal planning experience that evolves with you.

---

## ✨ Features

### 🧠 AI-Powered Recipe Generation
- Personalized recipes generated via the **Gemini API**.
- Adapts to your **taste preferences**, **cravings**, and **available ingredients**.
- Balances recipes based on your **daily macronutrient targets**.

### 🍳 Seamless Meal Integration
- Instantly add AI-generated recipes to your daily meal log.
- Automatic macronutrient recalculations for effortless tracking.

### 🛒 Grocery Intelligence (via Knot API)
- Integrates with **Knot API** to retrieve your recent grocery purchases from:
  - Walmart  
  - Instacart  
  - DoorDash  
  - UberEats  
  - and more  
- Uses your latest grocery items as building blocks for new recipes.

### 📊 Smart Nutrient Tracking
- Monitors daily **macronutrients** (protein, carbs, fats) and **total calories**.
- Visualizes progress and automatically adjusts recipe suggestions.

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | [Next.js 14+](https://nextjs.org/) (App Router) |
| **UI & Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **AI Engine** | [Google Gemini API](https://ai.google.dev/) |
| **Grocery Integration** | [Knot API](https://www.knotapi.com/) |
| **State Management** | React Hooks (`useState`, `useEffect`) |
| **Hosting** | Vercel / Render |

---

## ⚙️ How It Works

1. **User Input**
   - Log current meals, cravings, and available ingredients.  
2. **Data Gathering**
   - Fetch grocery data via **Knot API**, filter for cooking ingredients and find nutritional data with Gemini.  
3. **Prompt Construction**
   - Combine macronutrient needs, taste preferences, and cravings into a **custom AI prompt**.  
4. **Gemini Recipe Generation**
   - Gemini produces a personalized recipe tailored to you.  
5. **Meal Integration**
   - Add recipes directly into your daily log — Squire updates your nutrition stats instantly.

---


## Brought to you by:

- Rayane Nossair  | "3 commits in 2024".    (@yesyesokay on discord)
- Reo Saito       | "A tree with n verticies has n-1 edges." (@oreocraft on discord)
- Matt Malek      | "Alice in Chains should be in the Rock and Roll Hall of Fame" (@AZMudcat)
