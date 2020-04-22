import React from "react";
import "./index.css";
import AppContext from "../../context";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TwitterView from "../TwitterView/TwitterView";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

class Root extends React.Component {
  state = {
    twitter: [],
    article: [],
    note: [],

    isModalOpen: true,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closeModal();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;

    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppContext.Provider value={contextElements}>
          <>
            <Header openModalFn={this.openModal} />

            <Switch>
              <Route exact path="/" component={TwitterView} />
              <Route path="/articles" component={ArticlesView} />
              <Route path="/notes" component={NotesView} />
            </Switch>
            {isModalOpen && <Modal closeModalFn={this.closeModal} />}
          </>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
