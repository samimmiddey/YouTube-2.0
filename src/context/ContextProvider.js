import React, { createContext, useCallback, useContext, useReducer } from 'react';

const Context = createContext();

const initialState = {
   sidebar: true,
   searchModal: false,
   tag: '',
   darkMode: false,
   activeTab: 'one'
}

const contextReducer = (state, action) => {
   switch (action.type) {
      case 'TOGGLE_SIDEBAR':
         return {
            ...state,
            sidebar: action.value
         }
      case 'TOGGEL_SEARCH_MODAL': {
         return {
            ...state,
            searchModal: !state.searchModal
         }
      }
      case 'SET_TAG': {
         return {
            ...state,
            tag: action.value
         }
      }
      case 'DARK_MODE': {
         return {
            ...state,
            darkMode: action.value
         }
      }
      case 'ACTIVE_TAB': {
         return {
            ...state,
            activeTab: action.value
         }
      }
      default:
         return {
            ...state
         }
   }
}

export const ContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(contextReducer, initialState);

   const toggleSidebar = useCallback((value) => {
      dispatch({ type: 'TOGGLE_SIDEBAR', value: value });
   }, []);

   const toggleSearchModal = () => {
      dispatch({ type: 'TOGGEL_SEARCH_MODAL' });
   };

   const setTag = (value) => {
      dispatch({ type: 'SET_TAG', value: value });
   };

   const setDarkMode = useCallback((value) => {
      dispatch({ type: 'DARK_MODE', value: value });
   }, []);

   const setActiveTab = (value) => {
      dispatch({ type: 'ACTIVE_TAB', value: value });
   };

   const contextValues = {
      sidebar: state.sidebar,
      searchModal: state.searchModal,
      tag: state.tag,
      darkMode: state.darkMode,
      activeTab: state.activeTab,
      toggleSidebar: toggleSidebar,
      toggleSearchModal: toggleSearchModal,
      setTag: setTag,
      setDarkMode: setDarkMode,
      setActiveTab: setActiveTab
   };

   return (
      <Context.Provider value={contextValues}>
         {children}
      </Context.Provider>
   );
};

export const useReactContext = () => useContext(Context);