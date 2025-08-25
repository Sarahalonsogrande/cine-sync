import { Injectable } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, logoAngular } from 'ionicons/icons';
import * as allIcons from 'ionicons/icons';

@Injectable({
  providedIn: 'root',
})

export class IoniconsService {

  constructor() { }

  loadListIcons() {
    addIcons({ home, logoAngular });
  }

  loadAllIcons() {
    addIcons(allIcons);
  }

}

////////////////////////////////////////////////////
// @Injectable({
//     providedIn: 'root'
// })

// export class IoniconsService {

//     //Iconos principales de la aplicación
//     getIcons() {
//         return {
//             // Navegación
//             home: 'home-outline',
//             homeActive: 'home',
//             list: 'list-outline',
//             listActive: 'list',
//             add: 'add-outline',
//             addActive: 'add',
//             delete: 'trash-outline',
//             deleteActive: 'trash',

//             // Autenticación
//             login: 'log-in-outline',
//             logout: 'log-out-outline',
//             person: 'person-outline',
//             personActive: 'person',

//             // Películas
//             movie: 'film-outline',
//             movieActive: 'film',
//             search: 'search-outline',
//             searchActive: 'search',
//             star: 'star-outline',
//             starActive: 'star',
//             play: 'play-outline',
//             playActive: 'play',

//             // UI General
//             menu: 'menu-outline',
//             close: 'close-outline',
//             back: 'arrow-back-outline',
//             forward: 'arrow-forward-outline',
//             up: 'chevron-up-outline',
//             down: 'chevron-down-outline',
//             left: 'chevron-back-outline',
//             right: 'chevron-forward-outline',

//             // Acciones
//             edit: 'create-outline',
//             save: 'checkmark-outline',
//             cancel: 'close-outline',
//             refresh: 'refresh-outline',
//             share: 'share-outline',
//             download: 'download-outline',

//             // Estados
//             heart: 'heart-outline',
//             heartActive: 'heart',
//             bookmark: 'bookmark-outline',
//             bookmarkActive: 'bookmark',
//             favorite: 'star-outline',
//             favoriteActive: 'star',

//             // Géneros de películas
//             action: 'flash-outline',
//             comedy: 'happy-outline',
//             drama: 'sad-outline',
//             horror: 'skull-outline',
//             romance: 'heart-outline',
//             scifi: 'planet-outline',
//             thriller: 'eye-outline',
//             documentary: 'camera-outline',
//             animation: 'color-palette-outline',
//             fantasy: 'sparkles-outline',

//             // Configuración
//             settings: 'settings-outline',
//             info: 'information-circle-outline',
//             help: 'help-circle-outline',
//             notification: 'notifications-outline',
//             notificationActive: 'notifications',

//             // Social
//             // share: 'share-social-outline',
//             like: 'thumbs-up-outline',
//             dislike: 'thumbs-down-outline',
//             comment: 'chatbubble-outline',

//             // Multimedia
//             image: 'image-outline',
//             video: 'videocam-outline',
//             audio: 'musical-notes-outline',
//             camera: 'camera-outline',

//             // Utilidades
//             calendar: 'calendar-outline',
//             time: 'time-outline',
//             location: 'location-outline',
//             link: 'link-outline',
//             copy: 'copy-outline',

//             // Estado de conexión
//             wifi: 'wifi-outline',
//             offline: 'cloud-offline-outline',
//             sync: 'sync-outline',

//             // Filtros y ordenación
//             filter: 'filter-outline',
//             sort: 'swap-vertical-outline',
//             grid: 'grid-outline',
//             listView: 'list-outline'
//         };
//     }

//     // Obtener icono específico
//     getIcon(name: string): string {
//         const icons = this.getIcons();
//         return (icons as any)[name] || 'help-circle-outline';
//     }

//     // Obtener iconos por categoría
//     getNavigationIcons() {
//         const icons = this.getIcons();
//         return {
//             home: icons.home,
//             homeActive: icons.homeActive,
//             list: icons.list,
//             listActive: icons.listActive,
//             add: icons.add,
//             addActive: icons.addActive,
//             delete: icons.delete,
//             deleteActive: icons.deleteActive
//         };
//     }

//     getMovieIcons() {
//         const icons = this.getIcons();
//         return {
//             movie: icons.movie,
//             movieActive: icons.movieActive,
//             search: icons.search,
//             star: icons.star,
//             play: icons.play
//         };
//     }

//     getGenreIcons() {
//         const icons = this.getIcons();
//         return {
//             action: icons.action,
//             comedy: icons.comedy,
//             drama: icons.drama,
//             horror: icons.horror,
//             romance: icons.romance,
//             scifi: icons.scifi,
//             thriller: icons.thriller,
//             documentary: icons.documentary,
//             animation: icons.animation,
//             fantasy: icons.fantasy
//         };
//     }
// }
