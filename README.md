# node-graphql-basic
A basic boilerplate for GraphQL with Express

### Run npm install first
```JavaScript
  npm install
```

### Run the project
```
  yarn start
```
  or
```
  npm start
```

Configured with eslint
Using es6 with babel

#### GrqphQL route:
```
  http://localhost:3000/graphiql
```

#### Test data:
```
  mutation {
    createCat(name: "This is a new Cat!") {
      _id
      name
    }
  }
```

#### To list all data:
```
  {
    allCats {
      _id
      name
    }
  }
```
