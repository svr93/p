'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var BaseTheme = new Module('base-theme');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
BaseTheme.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  BaseTheme.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  BaseTheme.menus.add({
    title: 'baseTheme example page',
    link: 'baseTheme example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  BaseTheme.aggregateAsset('css', 'baseTheme.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    BaseTheme.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    BaseTheme.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    BaseTheme.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return BaseTheme;
});
