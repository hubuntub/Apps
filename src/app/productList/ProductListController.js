'use strict';
angular.module('apps')
  .controller('ProductListController', function ($scope, $stateParams) {
    $scope.request = {criteria: $stateParams.criteria};
    $scope.productList = [

      {
        reference: 'Lecteur de Musique',
        name: 'Amarok',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Unix-like, Windows',
        license: 'GNU General Public License version 2',
        thumbnail: 'assets/images/icons/amarok.png'
      },
      {
        reference: 'Client P2P',
        name: 'Amule',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/amule.png'
      },
      {
        reference: 'Éditeur',
        name: 'Anjuta',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/anjuta.png'
      },
      {
        reference: 'Modélisation et animation 3D',
        name: 'Blender',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/blender.png'
      },
      {
        reference: 'Éditeur',
        name: 'Bluefish',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/bluefish.png'
      },
      {
        reference: 'Report de bugs',
        name: 'Bug-buddy',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Unix-like',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/bug-buddy.png'
      },
      {
        reference: 'Outil',
        name: 'Caffeine',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/caffeine.png'
      },
      {
        reference: 'Lecteur de musique',
        name: 'Clementine',
        available: 'Non',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/clementine.png'
      },
      {
        reference: 'Éditeur de tags graphique',
        name: 'EasyTag',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/easytag.png'
      },
      {
        reference: 'Éditeur',
        name: 'Eclipse',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'Eclipse Public License',
        thumbnail: 'assets/images/icons/eclipse.png'
      },
      {
        reference: 'Éditeur',
        name: 'Emacs',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'GNU/Linux, FreeBSD, NetBSD, OpenBSD, GNU, OpenVMS, UNIX, Mac OS X, MS-DOS, Microsoft Windows',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/emacs.png'
      },
      {
        reference: 'Plateforme de sauvegarde de notes',
        name: 'Evernote',
        available: 'Non',
        freeship: false,
        operatingSystem: 'Cross platform',
        license: 'Software Licence Agreement',
        thumbnail: 'assets/images/icons/evernote.png'
      },
      {
        reference: 'Client FTP, FTPS et SFTP',
        name: 'Filezilla',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Windows, Linux, Mac OS X.',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/filezilla.png'
      },
      {
        reference: 'Gestionnaire de collections personnelles',
        name: 'GcStar',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/gcstar.png'
      },
      {
        reference: 'Éditeur images',
        name: 'Gimp',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/gimp.png'
      },
      {
        reference: 'Librairie',
        name: 'Gnome Gnet',
        available: 'Non',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/gnome-gnect.png'
      },
      {
        reference: 'Jeu sur Linux',
        name: 'Gnome Gnibbles',
        available: 'Non',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/gnome-gnibbles.png'
      },
      {
        reference: 'Jeu sur Linux',
        name: 'Gnome Iagno',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platformv',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/gnome-iagno.png'
      },
      {
        reference: 'Jeu sur Linux',
        name: 'Gnome Mines',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/gnome-mines.png'
      },
      {
        reference: 'Divertissement',
        name: 'Sound converter',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/soundconverter.png'
      },
      {
        reference: 'Plateforme musicale',
        name: 'Spotify',
        available: 'Non',
        freeship: false,
        operatingSystem: 'Cross platform',
        license: 'Software Licence Agreement',
        thumbnail: 'assets/images/icons/spotify.png'
      },
      {
        reference: 'Affichage du ciel',
        name: 'Stellarium',
        available: 'Non',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/stellarium.png'
      },
      {
        reference: 'Gestionnaire des paquets',
        name: 'Synaptic',
        available: 'Non',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'MIT License',
        thumbnail: 'assets/images/icons/synaptic.png'
      },
      {
        reference: 'Messagerie',
        name: 'Thunderbird',
        available: 'Non',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License, Mozilla Public License, GNU Lesser General Public License',
        thumbnail: 'assets/images/icons/thunderbird.png'
      },
      {
        reference: 'Prise de Notes',
        name: 'Tomboy',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/tomboy.png'
      },
      {
        reference: 'Éditeur',
        name: 'Vim',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform, Android, iOS',
        license: 'Logiciel Libre',
        thumbnail: 'assets/images/icons/vim.png'
      },
      {
        reference: 'Script',
        name: 'Wine winetricks',
        available: 'Non',
        freeship: true,
        operatingSystem: 'Linux',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/wine-winetricks.png'
      },
      {
        reference: 'Jeu de vidéo',
        name: 'WorldOfGoo',
        available: 'Non',
        freeship: false,
        operatingSystem: 'Cross platform, Android, iOS',
        license: 'Commons Attribution-Share Alike License',
        thumbnail: 'assets/images/icons/WorldOfGoo.png'
      },
      {
        reference: 'Gestionnaire de wiki',
        name: 'Zim',
        available: 'Oui',
        freeship: true,
        operatingSystem: 'Cross platform',
        license: 'GNU General Public License',
        thumbnail: 'assets/images/icons/zim.png'
      }
    ];
  });
