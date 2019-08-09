# Answers

- [ ] What are the required parts of class components?
      First: declare your class component by extending the React.Component parent class. class FooComponent extends React.Component {}.
      Second: Use the constructor function to set up some state. because we’re calling extends, we also need to call super(); otherwise we wont have access the this
      Third: we need to render some sort of UI to the DOM. We do this by calling the life-cycle method called render.

- [ ] Name at least three lifecycle methods?

componentWillMount, componentDidMount, componentWillReceiveProps

- [ ] Why are forms used so often in web applications and software?

Security to login, data collection, etc.

- [ ] What advantages are there by using a forms library like Formik?

Basic forms can be handled easily with hooks/state, but sometimes you’ll need some extra help for more complex forms. Formik abstracts away some of the more complex situations we might come across, such as nested form data and/or arrays, wiring up state,validation, error messages.

- [ ] Why do we write tests for our apps?
      Automated testing minimizes the risk of bugs finding their way into production code.
