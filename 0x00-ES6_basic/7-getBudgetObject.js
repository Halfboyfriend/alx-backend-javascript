function getBudgetObject(income, gdp, capita) {
    const budget = {
      income: income,
      gdp: gdp,
      capita: capita,
    };
  
    return {
        'income': budget.income,
        'gdp': budget.gdp,
        'capita': budget.capita
    };
  }


  console.log(getBudgetObject(400, 700, 900));
