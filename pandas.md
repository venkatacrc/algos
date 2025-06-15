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
reviews.loc[(reviews.country.isin(['Italy', 'France']) & (reviews.points >= 90) & (reviews.price.notnull())]
```

## Summmary Functions

```python
reviews.points.describe()
reviews.points.median()
reviews.country.unique()
# To see a list of unique values and how often they occur in the dataset, we can use the value_counts() method:
reviews.country.value_counts()
reviews.groupby('country').country.count() # same as above

# Descriptive Statistics:
describe(): Generates descriptive statistics, including mean, median, standard deviation, min, max, and percentiles. 
count(): Returns the number of non-null values in each column.
sum(): Calculates the sum of values in each column.
mean(): Computes the average of values in each column.
median(): Finds the median value of each column.
min(): Returns the minimum value in each column.
max(): Returns the maximum value in each column.
std(): Computes the standard deviation of each column.
var(): Calculates the variance of each column.
quantile(q): Returns the value at the given quantile (q, between 0 and 1).
mode(): Returns the mode(s) of each column.
mad(): Calculates the mean absolute deviation.
sem(): Computes the standard error of the mean.

# Other Useful Functions:
nunique(): Returns the number of unique values in each column.
unique(): Returns an array of unique values in each column.
isnull(): Returns a boolean DataFrame indicating missing values.
idxmax(): Returns the index of the maximum value.
idxmin(): Returns the index of the minimum value.
nlargest(n): Returns the n largest values.
nsmallest(n): Returns the n smallest values.
agg() or aggregate(): Allows for applying different summary functions to different columns.
value_counts(): Returns the count of unique values in a Series.
info(): Prints a concise summary of the DataFrame, including data types and non-null values.
```

## Maps

```python
reviews_points_mean = reviews.points.mean()
reviews.points.map(lambda p: p - reviews_points_mean)

def remean_points(row):
  row.points = row.points - reviews_points_mean
  return row
reviews.apply(remean_points, axis='columns') # axis='index' => function takes column to process

# find the bargain wine
bargain_idx = (reviews.points/reviews.price).idxmax()
bargain_wine = reviews.loc[bargain_idx, 'title']
```

## Grouping

```python
reviews_written = reviews.groupby('taster_twitter_handle').size()
reviews_written = reviews.groupby('taster_twitter_handle').taster_twitter_handle.count() # same as above

# selecting the name of the first wine reviewed from each winery in the dataset:
reviews.groupby('winery').apply(lambda df: df.title.iloc[0])

# here's how we would pick out the best wine by country and province
reviews.groupby(['country', 'province']).apply(lambda df: df.loc[df.points.idxmax()])

agg() lets you run a bunch of different functions on your DataFrame simultaneously.
reviews.groupby('country').price.agg([len, min, max])
```

## Sorting  

```python
# Multi-indexes
countries_reviewed = reviews.groupby(['country', 'province']).description.agg([len])

countries_reviewed = countries_reviewed.reset_index()
countries_reviewed.sort_values(by='len')
countries_reviewed.sort_values(by='len', ascending=False) # descending order

# sort by index
countries_reviewed.sort_index()

# to sort more than one column
countries_reviewed.sort_values(by=['country', 'len'])
```
