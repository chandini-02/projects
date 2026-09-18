'''from flask import Flask
app=Flask("__name__")
@app.route("//")
def add():
    a=2
    b=3
    c=a+b
    return f"addition is{c}"
if __name__=="__main__":
    app.run(debug=True)'''

    
'''from flask import Flask
app=Flask("__name__")
@app.route("/")
def add():
    a=9
    b=20
    a,b=b,a
    return f"swapping a={a},b={b}";
if __name__=="__main__":
    app.run(debug=True)'''

'''from flask import Flask
app=Flask("__name__")
@app.route("//")
def add():
    return"helloworld"
if __name__=="__main__":
    app.run(debug=True)'''

    
'''from flask import Flask
app = Flask(__name__)
@app.route('/')
def home():
   return"welcome to home page"
@app.route('/about')
def about():
   return"welcome to about"
if __name__=="__main__":
    app.run(debug=True)'''

    
