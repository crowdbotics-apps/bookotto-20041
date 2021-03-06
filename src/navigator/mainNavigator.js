import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1997841Navigator from '../features/BlankScreen1997841/navigator';
import ArticleList97692Navigator from '../features/ArticleList97692/navigator';
import ArticleList97691Navigator from '../features/ArticleList97691/navigator';
import ArticleList97690Navigator from '../features/ArticleList97690/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1997841: { screen: BlankScreen1997841Navigator },
ArticleList97692: { screen: ArticleList97692Navigator },
ArticleList97691: { screen: ArticleList97691Navigator },
ArticleList97690: { screen: ArticleList97690Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
