# Pandas

## Indexing

loc, iloc (numerical position in data)

```python
import pandas as pd

df = pd.DataFrame({
  'A': [10, 20, 30],
  'B': [40, 50, 60]
}, index = ['x', 'y', 'z'])

# df looks like:
#     A   B
# x  10  40
# y  20  50
# z  30  60

df.iloc[0, 1] == 40
df.loc['x', 'B'] == 40
df.iloc[:, 1] -> Series with [40, 50, 60]
df.loc[:, 'B'] -> ditto

df.iloc[0:2] # Rows at position 0 and 1
df.loc['x', 'y'] # Rows with lables 'x' and 'y' (inclusive!)
```

## Filtering

```python
reviews.loc[(reviews.country.isin(['Italy', 'France']) & ('reviews.points >= 90) & (reviews.price.notnull())]
```
