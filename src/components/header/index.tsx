import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import { styled } from '@mui/material/styles';
import style from './style.css';

const Button = styled('button')({
  backgroundColor: 'red'
});

const Header: FunctionalComponent = () => {
  return (
    <header class={style.header}>
      <h1>Preact App</h1>
      <Button>button</Button>
      <nav>
        <Link activeClassName={style.active} href="/">
          Home
        </Link>
        <Link activeClassName={style.active} href="/profile">
          Me
        </Link>
        <Link activeClassName={style.active} href="/profile/john">
          John
        </Link>
      </nav>
    </header>
  );
};

export default Header;
