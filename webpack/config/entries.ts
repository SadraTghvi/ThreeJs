import { Entry } from 'webpack'

import { resolve, SRC_DIR } from './path'

const Entries: Entry = {
    react_vendors: { import: ['react', 'react-dom'], runtime: 'runtime' },

    state: {
        import: resolve(SRC_DIR, 'state'),
        dependOn: ['react_vendors'],
    },

    shared: {
        import: ['react-router-dom', '@00-team/utils'],
        dependOn: ['react_vendors', 'state'],
    },

    components: {
        import: resolve(SRC_DIR, 'components'),
        dependOn: ['react_vendors'],
    },

    main: {
        import: SRC_DIR,
        dependOn: ['Home', 'Contact', 'About', 'Selling', 'layout'],
    },

    Home: {
        import: resolve(SRC_DIR, 'Home'),
        dependOn: ['shared', 'components'],
    },

    layout: {
        import: resolve(SRC_DIR, 'layout'),
        dependOn: ['shared'],
    },
}

export default Entries
