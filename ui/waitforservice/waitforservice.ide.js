/* global TW */
TW.IDE.Widgets.waitforservice = function () {
  this.widgetIconUrl = function () {
    return '../Common/extensions/WaitForServiceWidget/ui/waitforservice/wait.png';
  };

  this.widgetProperties = function () {
    return {
      'name': 'WaitForService',
      'description': 'Widget to wait for a service to be completed',
      'category': ['Common'],
      'iconImage': 'wait.png',
      'properties': {
        'Width': {
          'description': 'width',
          'defaultValue': 200
        },
        'Height': {
          'description': 'height',
          'defaultValue': 28
        },
        'debugMode': {
          'isVisible': true,
          'baseType': 'BOOLEAN',
          'isEditable': true,
          'defaultValue': false,
          'description': 'true to activate the debug'
        },
        waitingURLs: {
          isBindingTarget: true,
          isVisible: true,
          'isEditable': true,
          description: "The services to be waited represented by the respective (partial) URLs separated by commas, eg. '/PlatformSubsystem/Services/GetAllStyleDefinitions, /SystemRepository/Services/BrowseDirectory', if empty the widget will not wait any service",
          defaultValue: '',
          baseType: 'STRING'
        },
        startedURL: {
          isBindingSource: true,
          isVisible: true,
          'isEditable': false,
          description: "The started service represented by its (partial) URL as provided in the property waitingURLs, eg. '/PlatformSubsystem/Services/GetAllStyleDefinitions'",
          defaultValue: '',
          baseType: 'STRING'
        },
        completedURL: {
          isBindingSource: true,
          isVisible: true,
          'isEditable': false,
          description: "The completed service represented by its (partial) URL as provided in the property waitingURLs, eg. '/PlatformSubsystem/Services/GetAllStyleDefinitions'",
          defaultValue: '',
          baseType: 'STRING'
        }
      }
    };
  };

  this.widgetServices = function () {
    return {
      'Start': {
        'warnIfNotBound': true
      }
    };
  };

  this.widgetEvents = function () {
    return {
      'Started': {},
      'WaitingStarted': {},
      'WaitingCompleted': {}
    };
  };

  this.renderHtml = function () {
    return '<div class="widget-content widget-waitforservice">' + '<span class="waitforservice-property">Wait For Service</span>' + '</div>';
  };
};