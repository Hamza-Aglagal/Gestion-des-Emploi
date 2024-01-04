import React from "react";


export const MENUITEMS = [
  {
    title: "General",
    icon: <i className="pe-7s-home pe-lg">..</i>,
    path: `${process.env.PUBLIC_URL}/dashboard/default`,
    type: "sub",
    active: true,
    bookmark: true,
    children: [
      { title: "Dashboard", type: "sub" },
      {
        title: "Default",
        type: "link",
        path: `${process.env.PUBLIC_URL}/dashboard/default`,
      },
      {
        title: "Crypto",
        type: "link",
        path: `${process.env.PUBLIC_URL}/dashboard/crypto`,
      },
      {
        title: "Ecommerce",
        type: "link",
        path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`,
      },
      { title: "Widgets", type: "sub-header" },
      {
        title: "General widget",
        type: "link",
        path: `${process.env.PUBLIC_URL}/dashboard/generalwidget`,
      },
      {
        title: "Chart widget",
        type: "link",
        path: `${process.env.PUBLIC_URL}/dashboard/chartwidget`,
      },
    ],
  },
  {
    title: "UI Kits",
    icon: <i className="pe-7s-portfolio pe-lg">.</i>,
    type: "sub",
    path: `${process.env.PUBLIC_URL}/ui-element/typography`,
    active: false,
    bookmark: true,
    children: [
      { title: "Ui Elements", type: "sub" },
      {
        title: "Typography",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/typography`,
      },
      {
        title: "Buttons ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/button`,
      },
      {
        title: "Avatars",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/avatar`,
      },
      {
        title: "helper classes",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/helperclass`,
      },
      {
        title: "Grid ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/grid`,
      },
      {
        title: "Tag & pills",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/tagsandpills`,
      },
      {
        title: "Modal",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/modalComponent`,
      },
      {
        title: "Progress",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/progress-bars`,
      },
      {
        title: "Alert ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/alertComponent`,
      },
      {
        title: "Popover",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/popoverComponent`,
      },
      {
        title: "Tooltip",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/tooltipsComponent`,
      },
      {
        title: "Spinners ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/spinner`,
      },
      {
        title: "Dropdown",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/dropdownComponent`,
      },
      {
        title: "Bootstrap Tabs",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/tab-bootstrap`,
      },
      {
        title: "Line Tabs ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/tab-line`,
      },
      {
        title: "Accordion",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/accordionComponent`,
      },
      {
        title: "Navs",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/navsComponent`,
      },
      {
        title: "Lists ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/list`,
      },
      {
        title: "Scrollable",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/scrollable`,
      },
      {
        title: "Bootstrap Notify ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/bootstrap-notify`,
      },
      {
        title: "Rating",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/rating`,
      },
      {
        title: "Drag And Drop",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/draganddrop`,
      },
      {
        title: "Dropzone",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/dropzone`,
      },
      {
        title: "Tour ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/tourComponent`,
      },
      {
        title: "SweetAlert2",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/sweetAlert`,
      },
      {
        title: "Owl Carousel",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/carousel`,
      },
      {
        title: "Ribbons ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/ribbon`,
      },
      {
        title: "Pagination",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/pagination`,
      },
      {
        title: "Steps",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/steps`,
      },
      {
        title: "Breadcrumb ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/breadcrumb`,
      },
      {
        title: "Range Slider",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/rangeSlider`,
      },
      {
        title: "Image cropper",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/imageCropper`,
      },
      {
        title: "Sticky ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/stickyNotes`,
      },
      {
        title: "Upload ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/image-upload`,
      },
      { title: "Icons", type: "sub-header" },
      {
        title: "Fontawesome Icon ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/fontAwsomeIcon`,
      },
      {
        title: "Ico Icon ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/icoIcons`,
      },
      {
        title: "Feather icon ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/featherIcons`,
      },
      {
        title: "Thimify Icon ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/themifyIcons`,
      },
      {
        title: "Whether Icon ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/weatherIcons`,
      },
      {
        title: "pe7 icon",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/pe7Icon`,
      },
      {
        title: "Ionic Icon ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ui-element/ionic-icon`,
      },
    ],
  },
  {
    title: "Forms",
    icon: <i className="pe-7s-note2">.</i>,
    type: "sub",
    path: `${process.env.PUBLIC_URL}/form/form-validation`,
    active: false,
    children: [
      { title: "Form Controls", type: "sub" },
      {
        title: "Form Validation",
        type: "link",
        path: `${process.env.PUBLIC_URL}/form/form-validation`,
      },
      {
        title: "Base Inputs",
        type: "link",
        path: `${process.env.PUBLIC_URL}/form/base-input`,
      },
      {
        title: "Checkbox & Radio ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/form/radio-checkbox-control`,
      },
      {
        title: "Input Groups",
        type: "link",
        path: `${process.env.PUBLIC_URL}/form/input-group`,
      },
      {
        title: "Mega Options",
        type: "link",
        path: `${process.env.PUBLIC_URL}/form/megaoptions`,
      },

      { title: "Form Widgets", type: "sub-header" },
      {
        title: "Datepicker",
        type: "link",
        path: `${process.env.PUBLIC_URL}/form-widget/datepicker`,
      },
      {
        title: "Typeahead",
        type: "link",
        path: `${process.env.PUBLIC_URL}/form-widget/typeahead`,
      },

      { title: "Form Layout", type: "sub-header" },
      {
        title: "Default Forms",
        type: "link",
        path: `${process.env.PUBLIC_URL}/form/default-form`,
      },
      {
        title: "Form Wizard 1",
        type: "link",
        path: `${process.env.PUBLIC_URL}/form/form-wizard-one`,
      },
    ],
  },
  {
    title: "Tables",
    icon: <i className="pe-7s-id">.</i>,
    type: "sub",
    path: `${process.env.PUBLIC_URL}/tables/bootstrap-basic-table`,
    active: false,
    children: [
      { title: "Bootstrap Tables", type: "sub" },
      {
        title: "Basic Tables",
        type: "link",
        path: `${process.env.PUBLIC_URL}/tables/bootstrap-basic-table`,
      },
      {
        title: "Sizing Tables",
        type: "link",
        path: `${process.env.PUBLIC_URL}/tables/bootstrap-sizing-table`,
      },
      {
        title: "Border Tables",
        type: "link",
        path: `${process.env.PUBLIC_URL}/tables/bootstrap-border-table`,
      },
      {
        title: "Styling Tables",
        type: "link",
        path: `${process.env.PUBLIC_URL}/tables/bootstrap-styling-table`,
      },
      { title: "Data Tables", type: "sub-header" },
      {
        title: "Data Tables",
        type: "link",
        path: `${process.env.PUBLIC_URL}/tables/data-tables`,
      },
    ],
  },
  {
    title: "Cards",
    icon: <i className="pe-7s-browser">.</i>,
    type: "sub",
    path: `${process.env.PUBLIC_URL}/cards/basic`,
    active: false,
    children: [
      { title: "Cards", type: "sub" },
      {
        title: "Basic Card",
        type: "link",
        path: `${process.env.PUBLIC_URL}/cards/basic`,
      },
      {
        title: "Theme Card",
        type: "link",
        path: `${process.env.PUBLIC_URL}/cards/theme`,
      },
      {
        title: "Tabbed Card",
        type: "link",
        path: `${process.env.PUBLIC_URL}/cards/tabbed`,
      },
    ],
  },
  {
    title: "Charts",
    icon: <i className="pe-7s-graph3">.</i>,
    type: "sub",
    path: `${process.env.PUBLIC_URL}/charts/apexcharts`,
    active: false,
    children: [
      { title: "Charts", type: "sub" },
      {
        title: "Apex Chart",
        type: "link",
        path: `${process.env.PUBLIC_URL}/charts/apexcharts`,
      },
      {
        title: "Google Chart",
        type: "link",
        path: `${process.env.PUBLIC_URL}/charts/googlecharts`,
      },
      {
        title: "Chartjs Chart",
        type: "link",
        path: `${process.env.PUBLIC_URL}/charts/chartjscharts`,
      },
    ],
  },
  {
    title: "Apps",
    icon: <i className="pe-7s-server">.</i>,
    type: "sub",
    path: `${process.env.PUBLIC_URL}/ecommerce-app/product`,
    active: false,
    children: [
      { title: "Ecommerce", type: "sub" },
      {
        title: "Product",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ecommerce-app/product`,
      },
      {
        title: "Product page",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ecommerce-app/product-page`,
      },
      {
        title: "Product list ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ecommerce-app/product-list`,
      },
      {
        title: "Payment Details",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ecommerce-app/product-details`,
      },
      {
        title: "Order History",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ecommerce-app/orederhistory`,
      },
      {
        title: "Invoice",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ecommerce-app/invoice`,
      },
      {
        title: "Pricing",
        type: "link",
        path: `${process.env.PUBLIC_URL}/ecommerce-app/pricing`,
      },
      { title: "Blog", type: "sub-header" },
      {
        title: "Blog Details",
        type: "link",
        path: `${process.env.PUBLIC_URL}/blog/blog-details`,
      },
      {
        title: "Blog Single",
        type: "link",
        path: `${process.env.PUBLIC_URL}/blog/blog-single`,
      },
      {
        title: "Add Post",
        type: "link",
        path: `${process.env.PUBLIC_URL}/blog/addpost`,
      },
      { title: "Timeline", type: "sub-header" },
      {
        title: "Timeline 1",
        type: "link",
        path: `${process.env.PUBLIC_URL}/timeline/timeline-one`,
      },
      {
        title: "Timeline 2",
        type: "link",
        path: `${process.env.PUBLIC_URL}/timeline/timeline-two`,
      },
      { title: "Gallery", type: "sub-header" },
      {
        title: "Gallery Grid",
        type: "link",
        path: `${process.env.PUBLIC_URL}/gallery/gallery-grid`,
      },
      {
        title: "Gallery Grid with Desc",
        type: "link",
        path: `${process.env.PUBLIC_URL}/gallery/gallerygrid-desc`,
      },
      {
        title: "Masonry Gallery",
        type: "link",
        path: `${process.env.PUBLIC_URL}/gallery/gallery-masonry`,
      },
      {
        title: "Masonry Gallery Desc",
        type: "link",
        path: `${process.env.PUBLIC_URL}/gallery/gallerymasonry-desc`,
      },
      {
        title: "Hover Effects",
        type: "link",
        path: `${process.env.PUBLIC_URL}/gallery/hover-effect`,
      },
      { title: "Job Search", type: "sub-header" },
      {
        title: "Cards view",
        type: "link",
        path: `${process.env.PUBLIC_URL}/job-search/cardview`,
      },
      {
        title: "List View",
        type: "link",
        path: `${process.env.PUBLIC_URL}/job-search/listview`,
      },
      {
        title: "Job Details",
        type: "link",
        path: `${process.env.PUBLIC_URL}/job-search/job-details`,
      },
      {
        title: "Apply",
        type: "link",
        path: `${process.env.PUBLIC_URL}/job-search/apply`,
      },
      { title: "Learning", type: "sub-header" },
      {
        title: "Learning List",
        type: "link",
        path: `${process.env.PUBLIC_URL}/learning/learning-list`,
      },
      {
        title: "Detailed Course",
        type: "link",
        path: `${process.env.PUBLIC_URL}/learning/detailed-course`,
      },
    ],
  },
  {
    title: "Apps",
    tag: <span className="badge rounded-pill badge-primary">New</span>,
    icon: <i className="pe-7s-gift pe-lg">.</i>,
    type: "sub",
    active: false,
    path: `${process.env.PUBLIC_URL}/users/user-profile`,
    bookmark: true,
    children: [
      { title: "User", type: "sub" },
      {
        title: "Users Profile",
        type: "link",
        path: `${process.env.PUBLIC_URL}/users/user-profile`,
      },
      {
        title: "Users Edit",
        type: "link",
        path: `${process.env.PUBLIC_URL}/users/user-edit`,
      },
      {
        title: "Users Cards ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/users/user-cards`,
      },
      {
        title: "Email App",
        type: "link",
        path: `${process.env.PUBLIC_URL}/appnew/email-app`,
      },
      {
        title: "Chat App",
        type: "link",
        path: `${process.env.PUBLIC_URL}/appnew/chat-app`,
      },
      {
        title: "Contact App",
        type: "link",
        path: `${process.env.PUBLIC_URL}/appnew/contact-app`,
      },
      {
        title: "Full Calender Basic ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/calender/basic`,
      },
      {
        title: "Full Calender Advance",
        type: "link",
        path: `${process.env.PUBLIC_URL}/calender/advance`,
      },
      {
        title: "Social App",
        type: "link",
        path: `${process.env.PUBLIC_URL}/appnew/social-app`,
      },
      {
        title: "To-Do",
        type: "link",
        path: `${process.env.PUBLIC_URL}/appnew/todo-app`,
      },
      { title: "Editors", type: "sub-header" },
      {
        title: "CK editor",
        type: "link",
        path: `${process.env.PUBLIC_URL}/editors/ck-editor`,
      },
      {
        title: "MDE editor ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/editors/mde-editor`,
      },
      {
        title: "ACE code editor",
        type: "link",
        path: `${process.env.PUBLIC_URL}/editors/ace-code-editor`,
      },

      { title: "Others", type: "sub-header" },
      {
        title: "FAQ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/others/faq`,
      },
      {
        title: "Knowledgebase ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/others/knowledgebase`,
      },

      { title: "Maps", type: "sub-header" },
      {
        title: "Google Maps",
        type: "link",
        path: `${process.env.PUBLIC_URL}/map/google-map`,
      },
      {
        title: "Leaflet Maps",
        type: "link",
        path: `${process.env.PUBLIC_URL}/map/leaflet-map`,
      },
      {
        title: "Pigeon Maps",
        type: "link",
        path: `${process.env.PUBLIC_URL}/map/pigeon-maps`,
      },
    ],
  },
  {
    title: "Pages",
    icon: <i className="pe-7s-copy-file">.</i>,
    type: "sub",
    path: `${process.env.PUBLIC_URL}/pages/sample-page`,
    active: false,
    children: [
      { title: "All Pages", type: "sub" },
      {
        title: "Sample page",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/sample-page`,
      },
      {
        title: "Support Ticket",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/support-ticket`,
      },
      {
        title: "Search Website ",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/search`,
      },
      {
        title: "Error 400",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/error-400`,
      },
      {
        title: "Error 404",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/error-404`,
      },
      {
        title: "Error 500",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/error-500`,
      },
      {
        title: "Maintenance",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/maintenance`,
      },
      {
        title: "Login Simple",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/login`,
      },
      {
        title: "Register Simple",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/register`,
      },
      {
        title: "Forget Password",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/forget-password`,
      },
      {
        title: "Coming Simple",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/comingsoon`,
      },
      {
        title: "Coming with Bg video",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/comingsoon-bg-video`,
      },
      {
        title: "Coming with Bg Image",
        type: "link",
        path: `${process.env.PUBLIC_URL}/pages/comingsoon-bg-image`,
      },
    ],
  },
];
