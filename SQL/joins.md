
# SQL Joins and Equivalent Pandas Operations

## Example Tables

### `employees`
| employee_id | name   | dept_id |
|-------------|--------|---------|
| 1           | Alice  | 10      |
| 2           | Bob    | 20      |
| 3           | Carol  | 10      |
| 4           | Dave   | 30      |

### `departments`
| dept_id | dept_name     |
|---------|---------------|
| 10      | HR            |
| 20      | Engineering   |
| 40      | Marketing     |

---

## 1. INNER JOIN (Only matching rows)

**SQL**
```sql
SELECT *
FROM employees e
INNER JOIN departments d
ON e.dept_id = d.dept_id;
```

**Pandas**
```python
pd.merge(employees, departments, on='dept_id', how='inner')
```

---

## 2. LEFT JOIN (All from left, matching from right)

**SQL**
```sql
SELECT *
FROM employees e
LEFT JOIN departments d
ON e.dept_id = d.dept_id;
```

**Pandas**
```python
pd.merge(employees, departments, on='dept_id', how='left')
```

---

## 3. RIGHT JOIN (All from right, matching from left)

**SQL**
```sql
SELECT *
FROM employees e
RIGHT JOIN departments d
ON e.dept_id = d.dept_id;
```

**Pandas**
```python
pd.merge(employees, departments, on='dept_id', how='right')
```

---

## 4. FULL OUTER JOIN (All rows from both, match when possible)

**SQL**
```sql
SELECT *
FROM employees e
FULL OUTER JOIN departments d
ON e.dept_id = d.dept_id;
```

**Pandas**
```python
pd.merge(employees, departments, on='dept_id', how='outer')
```

---

## 5. CROSS JOIN (All combinations)

**SQL**
```sql
SELECT *
FROM employees e
CROSS JOIN departments d;
```

**Pandas**
```python
employees.assign(key=1).merge(departments.assign(key=1), on='key').drop('key', axis=1)
```

---

## 6. SELF JOIN (Join table to itself)

**SQL**
```sql
SELECT e1.name AS emp1, e2.name AS emp2
FROM employees e1
JOIN employees e2 ON e1.dept_id = e2.dept_id
WHERE e1.employee_id < e2.employee_id;
```

**Pandas**
```python
e1 = employees.copy()
e2 = employees.copy()

merged = pd.merge(e1, e2, on='dept_id')
merged = merged[merged['employee_id_x'] < merged['employee_id_y']]
merged[['name_x', 'name_y']]
```
