// MARK: Libs
import { useState } from 'react';
// MARK: Interfaces
import { Language, StringsType } from './interfaces';

export default function useStrings(initialLanguage?: Language) {
  const [language, setLanguage] = useState<Language>(
    initialLanguage || Language.ptBR,
  );

  const strings: { [language: string]: StringsType } = {
    ptBR: {
      components: {
        repositoryList: {
          notFounded: 'Sem repositórios encontrados :(',
        },
        searchBar: {
          button: 'Buscar',
          placeHolder: 'Pesquise o login de um usuário gitHub',
        },
        userCard: {
          subTitle1: 'Repositórios públicos: ',
          subTitle2: 'Seguidores: ',
          button1: 'Repositórios',
          button2: 'Favoritos',
        },
        userNotFound: {
          warning: 'Usuário Não encontrado :(',
        },
      },
    },
    enUS: {
      components: {
        repositoryList: {
          notFounded: 'No repositories found :(',
        },
        searchBar: {
          button: 'Search',
          placeHolder: 'Search for a gitHub user login',
        },
        userCard: {
          subTitle1: 'Public repositories: ',
          subTitle2: 'Followers: ',
          button1: 'Repos',
          button2: 'Starred',
        },
        userNotFound: {
          warning: 'User Not found :(',
        },
      },
    },
  };

  return {
    strings: strings[language],
    language,
    setLanguage,
  };
}
