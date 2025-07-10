## Regression (Linear + Polynomial) 
![image](https://github.com/user-attachments/assets/587e5d4b-31c8-4d14-b57a-ad57611c5373)

### univariate linear regression

```python
import numpy as np
import matplotlib.pyplot as plt
x_train = np.array([1.0, 2.0])
y_train = = np.array([300.0, 500.0]
plt.scatter(x_train, y_train, marker='x', c='r')
plt.title("Housing prices")
plt.ylable('y')
plt.xlable('x')
plt.show()

# calc cost
def compute_cost(x, y, w, b):
    m = x.shape[0]
    cost = 0
    for i in range(m):
        f_wb = w * x[i] + b
        cost = cost + (f_wb - y[i])**2
    total_cost = 1/(2*m) * cost
    return total_cost

def compute_gradient(x, y, w, b):
    """
    Computes the gradient for linear regression 
    Args:
      x (ndarray (m,)): Data, m examples 
      y (ndarray (m,)): target values
      w,b (scalar)    : model parameters  
    Returns
      dj_dw (scalar): The gradient of the cost w.r.t. the parameters w
      dj_db (scalar): The gradient of the cost w.r.t. the parameter b     
    """
    m = x.shape[0]
    dj_dw = 0
    dj_db = 0
    for i in rage(m):
        dj_dw_i = (w * x[i] + b - y[i]) * x[i]
        dj_db_i = (w * x[i] + b - y[i])
        dj_dw += dj_dw_i
        dj_db += dj_db_i
    dj_dw = dj_dw / m
    dj_db = dj_db / m
    return dj_dw, dj_db

def gradient_descent(x, y, w_in, b_in, alpha, num_iers, cost_function, gradient_function):
  """
  Performs gradient descent to fit w,b. Updates w,b by taking 
  num_iters gradient steps with learning rate alpha
  
  Args:
    x (ndarray (m,))  : Data, m examples 
    y (ndarray (m,))  : target values
    w_in,b_in (scalar): initial values of model parameters  
    alpha (float):     Learning rate
    num_iters (int):   number of iterations to run gradient descent
    cost_function:     function to call to produce cost
    gradient_function: function to call to produce gradient
    
  Returns:
    w (scalar): Updated value of parameter after running gradient descent
    b (scalar): Updated value of parameter after running gradient descent
    """

    w = w_in
    b = b_in

    for i in range(num_iters):
        dj_dw, dj_db = compute_gradient(x, y, w, b)
        w = w - alpha * dj_dw
        b = b - alpha * dj_db

    return w, b

# vectorized linear regression
f = np.dot(w,x) + b 
```
### Feature Engineering

feature value is larger then its parameter is small and vice versa

#### Feature scaling
#### Mean Normalization
```math
x_1 = \frac{(x_1 - \mu_1)}{x_{max} - x_{min}}
```
#### Z-score normalization
$$x = \frac{x - \mu}{\sigma}$$

## Logistic Regression

![image](https://github.com/user-attachments/assets/d51ff2f6-82f5-49c3-8dbd-1bc009e7b953)
![image](https://github.com/user-attachments/assets/c3a3ab9d-4122-4524-920f-5639f21af335)

```python
def compute_cost_logistic(X, y, w, b):
    cost = 0.0
    m = X.shape[0]
    for i in range(m):
        z_i = np.dot(X[i], w) + b
        fwb_i = 1 / (1 + np.exp(-z_i)
        loss_i = -y[i] * np.log(fwb_i) - (1 - y[i]) * np.log(1 - fwb_i)
        cost += loss_i
    cost = cost / m
    return cost

def compute_gradient_logistic(X, y, w, b): 
    """
    Computes the gradient for logistic regression 
 
    Args:
      X (ndarray (m,n): Data, m examples with n features
      y (ndarray (m,)): target values
      w (ndarray (n,)): model parameters  
      b (scalar)      : model parameter
    Returns
      dj_dw (ndarray (n,)): The gradient of the cost w.r.t. the parameters w. 
      dj_db (scalar)      : The gradient of the cost w.r.t. the parameter b. 
    """
    m,n = X.shape
    dj_dw = np.zeros((n,))                           #(n,)
    dj_db = 0.

    for i in range(m):
        f_wb_i = sigmoid(np.dot(X[i],w) + b)          #(n,)(n,)=scalar
        err_i  = f_wb_i  - y[i]                       #scalar
        for j in range(n):
            dj_dw[j] = dj_dw[j] + err_i * X[i,j]      #scalar
        dj_db = dj_db + err_i
    dj_dw = dj_dw/m                                   #(n,)
    dj_db = dj_db/m                                   #scalar
        
    return dj_db, dj_dw  
```

### Overfitting

How do you address overfitting or high variance?
![image](https://github.com/user-attachments/assets/bbef9c36-4fc9-4f16-95ed-52580fe5117c)

- by using more training data
- feature selection
- regularization

![image](https://github.com/user-attachments/assets/7804aacb-0bb9-411f-9d15-dfc017e2c8be)

## Multiclass  classification (Softmax Regression)
![image](https://github.com/user-attachments/assets/36cebb2a-6f4d-4295-abbf-40a7eea36d7f)

