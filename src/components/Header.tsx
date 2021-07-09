
interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

interface HeaderProps {
    selectedGenre: GenreResponseProps
}

export function Header(props: HeaderProps){

    const selectedGenre = props.selectedGenre;

    return(
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    )
}