// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: getIcon('ic_user'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'GENERAL',
    items: [
      { title: 'Groupes', path: '/dashboard/groupe-active', icon: ICONS.dashboard },
      { title: 'professeurs', path: '/dashboard/professeurs-active', icon: ICONS.ecommerce },
      { title: 'Salles', path: '/dashboard/salle-active', icon: ICONS.analytics },
    ],
  },

  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'management',
    items: [

      {
        title: 'Seances',
        path: '/dashboard/Seances',
        icon: ICONS.user,
        children: [
          { title: 'Ajouter Emploi', path: '/dashboard/Seances/add-emploi' },
          { title: 'Supprimer Emploi', path: '/dashboard/Seances/delete-emploi' },
          { title: 'test', path: '/dashboard/Seances/ajouter-emploi' },
        ],
      }, 
      {
        title: "L'encadrement",
        path: '/dashboard/encadrent',
        icon: ICONS.user,
        children: [
          { title: 'Ajouter Encadrement', path: '/dashboard/encadrent/add-Encadrement' },
          { title: 'Supprimer Encadrement', path: '/dashboard/encadrent/delete-Encadrement' },
        ],
      },

    ],
  },


];

export default sidebarConfig;
