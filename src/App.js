import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

// subcomponents
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Meme from './components/Meme/Meme';
import Menu from './components/Menu/Menu';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memes: [],
      userIsLoggedIn: false,
      disabled: true,
    };
  }

  addVote(meme) {
    if (localStorage.getItem('email')) {
      const nuevaLista = [...this.state.memes];
      const indice = nuevaLista.findIndex((m) => m._id === meme._id);

      fetch('/memes/' + nuevaLista[indice]._id + '?increase=true', {
        method: 'PATCH',
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      }).then((e) => {
        nuevaLista[indice] = {
          ...nuevaLista[indice],
          points: nuevaLista[indice].points + 1,
        };

        this.setState({ memes: [...nuevaLista] });
      });
    }
  }

  removeVote(meme) {
    if (localStorage.getItem('email')) {
      const nuevaLista = [...this.state.memes];
      const indice = nuevaLista.findIndex((m) => m._id === meme._id);

      fetch('/memes/' + nuevaLista[indice]._id + '?increase=false', {
        method: 'PATCH',
        headers: {
          'x-access-token': localStorage.getItem('token'),
        },
      }).then((e) => {
        nuevaLista[indice] = {
          ...nuevaLista[indice],
          points: nuevaLista[indice].points - 1,
        };

        this.setState({ memes: [...nuevaLista] });
      });
    }
  }

  submitComment(meme) {
    const nuevaLista = [...this.state.memes];
    const indice = nuevaLista.findIndex((m) => m._id === meme._id);

    fetch('/comments/' + nuevaLista[indice]._id + '?increase=false', {
      method: 'POST',
      headers: {
        'x-access-token': localStorage.getItem('token'),
      },
    }).then((e) => {
      nuevaLista[indice] = {
        ...nuevaLista[indice],
        points: nuevaLista[indice].points - 1,
      };

      this.setState({ memes: [...nuevaLista] });
    });
  }

  showComment(meme) {
    const nuevaLista = [...this.state.memes];
    const indice = nuevaLista.findIndex((m) => m._id === meme._id);

    nuevaLista[indice].showComment = !nuevaLista[indice].showComment;

    this.setState({ memes: [...nuevaLista] });
  }

  toggleUserStatus() {
    if (this.state.userIsLoggedIn) {
      localStorage.clear();
      this.setState({ userIsLoggedIn: false });
    } else {
      this.setState({ userIsLoggedIn: true });
    }
  }

  componentDidMount() {
    if (localStorage.getItem('email')) {
      this.setState({ userIsLoggedIn: true });
    }

    fetch('/memes')
      .then((rawMemes) => rawMemes.json())
      .then((fetchedMemes) => {
        let comments = fetchedMemes.map((e) =>
          fetch(`/comments/memes/${e._id}`)
        ); // array de promesas con los comentarios de los memes

        Promise.all(comments).then((res) =>
          Promise.all(res.map((meme) => meme.json())).then((c) => {
            let wcomments = fetchedMemes.map((fm, i) => ({
              showComment: false,
              comentarios: c[i],
              ...fm,
            }));
            this.setState({ memes: [...wcomments] });
          })
        );
      });
  }

  // filtra los memes de la bd por la categoria asignada
  showMemesByCategory = async (category) => {
    const rawMemes = await fetch('/memes');
    const memes = await rawMemes.json();
    const filteredMemes = memes.filter((meme) => meme.category === category);

    this.setState({ memes: [...filteredMemes] });
  };

  render() {
    return (
      <div className="App">
        <div className="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
          <Header
            userLoggedIn={this.state.userIsLoggedIn}
            toggleStatus={this.toggleUserStatus.bind(this)}
          />
          <Container fluid>
            <Row>
              <Col xs={1} md={4} className="menuBox">
                <Menu
                  filterMemes={this.showMemesByCategory}
                  userLoggedIn={this.state.userIsLoggedIn}
                />
              </Col>
              <Col xs={4} sm={5} md={8}>
                <article className="memePosition">
                  <Meme
                    memes={this.state.memes}
                    addVoteHandler={this.addVote.bind(this)}
                    removeVoteHandler={this.removeVote.bind(this)}
                    showCommentHandler={this.showComment.bind(this)}
                  />
                </article>
              </Col>
            </Row>
          </Container>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
