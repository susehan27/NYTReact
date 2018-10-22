import React, {Component} from "react";
import Results from "../Results";
import Container from "../../components/Container";
import API from "../../utils/API";
import Saved from "../Saved";
import Search from "../Search";

class Home extends Component {

    state = {
        topic: "",
        startYear: "",
        endYear: "",
        articles: [],
        saved: []
    };

    componentDidMount() {
        this.loadSaved();
    };

    loadSaved = () => {
        API.getArticle() 
            .then((res) => {
                this.setState({saved: res.data})
            });
    };

    renderArticles = () => {
        return this.state.articles.map(article => (
          <Results
            _id={article._id}
            key={article._id}
            title={article.headline.main}
            date={article.pub_date}
            url={article.web_url}
            handleSaveButton={this.handleSaveButton}
            getSavedArticles={this.getSavedArticles}
          />
        ));
    };

    renderSaved = () => {
        return this.state.saved.map(save => (
          <Saved
            _id={save._id}
            key={save._id}
            title={save.title}
            date={save.date}
            url={save.url}
            handleDeleteButton={this.handleDeleteButton}
            getSavedArticles={this.getSavedArticles}
          />
        ));
    };

    handleTopicChange = (event) => {
        this.setState({ topic: event.target.value });
    };

    handleStartYearChange = (event) => {
        this.setState({ startYear: event.target.value });
    };

    handleEndYearChange = (event) => {
        this.setState({ endYear: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("Getting NYT Articles");
        console.log("this.state.topic: ", this.state.topic);
        console.log("this.state.startYear: ", this.state.startYear);
        console.log("this.state.endYear: ", this.state.endYear);
        API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
          .then((res) => {
            this.setState({ articles: res.data.response.docs });
            console.log("this.state.articles: ", this.state.articles);
          });
    };

    handleSaveButton = (id) => {
        const findArticleByID = this.state.articles.find((el) => el._id === id);
        console.log("findArticleByID: ", findArticleByID);
        const newSave = {title: findArticleByID.headline.main, date: findArticleByID.pub_date, url: findArticleByID.web_url};
        API.saveArticle(newSave)
        .then(this.getSavedArticles());
    };

    handleDeleteButton = (id) => {
        API.deleteArticle(id)
          .then(this.getSavedArticles());
    };
    
    
    render() {
        return (
            <div>
            <Container>
                <div className="jumbotron">
                    <h1>New York Times Search</h1>
                    <p>React Edition</p>
                </div>
                <Search
                    handleTopicChange={this.handleTopicChange}
                    handleStartYearChange={this.handleStartYearChange}
                    handleEndYearChange={this.handleEndYearChange}
                    handleFormSubmit={this.handleFormSubmit}
                    renderArticles={this.renderArticles}
                ></Search>
                    <div className="container">
                                <div className="row">
                                <div className="col-lg-12">
                                    <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">
                                        <strong>
                                            <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
                                        </h3>
                                    </div>
                                    <div className="panel-body">
                                        <ul className="list-group">
                                        {this.renderSaved()}
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
            </div>
            );
        }
      
      }

export default Home;