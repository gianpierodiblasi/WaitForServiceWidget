/* global TW */
TW.Runtime.Widgets.waitforservice = function () {
  var thisWidget = this;

  this.runtimeProperties = function () {
    return {
      'needsDataLoadingAndError': false
    };
  };

  this.renderHtml = function () {
    var html = '';
    html = '<div class="widget-content widget-waitforservice" style="display:none"></div>';
    return html;
  };

  this.afterRender = function () {
  };

  this.serviceInvoked = function (serviceName) {
    var debugMode = thisWidget.getProperty('debugMode');

    if (serviceName === 'Start') {
      $(document).off('ajaxSend.waitforservicewidget_waitForService');
      $(document).off('ajaxComplete.waitforservicewidget_waitForService');

      $(document).on('ajaxSend.waitforservicewidget_waitForService', function (event, xhr, options) {
        var startedURL = thisWidget.findURL(options, debugMode);

        if (startedURL) {
          thisWidget.setProperty('startedURL', startedURL);
          thisWidget.jqElement.triggerHandler("WaitingStarted");
        }
      });

      $(document).on('ajaxComplete.waitforservicewidget_waitForService', function (event, xhr, options) {
        var completedURL = thisWidget.findURL(options, debugMode);

        if (completedURL) {
          thisWidget.setProperty('completedURL', completedURL);
          thisWidget.jqElement.triggerHandler("WaitingCompleted");
        }
      });

      thisWidget.jqElement.triggerHandler("Started");
    }
  };

  this.updateProperty = function (updatePropertyInfo) {
    var properties = [
      "debugMode", "waitingURLs"
    ];

    if (properties.indexOf(updatePropertyInfo.TargetProperty) !== -1) {
      this.setProperty(updatePropertyInfo.TargetProperty, updatePropertyInfo.RawSinglePropertyValue);
    }
  };

  this.beforeDestroy = function () {
    try {
      console.log("Wait For Service -> Remove ajax event");
      TW.log.info("Wait For Service -> Remove ajax event");
      $(document).off('ajaxSend.waitforservicewidget_waitForService');
      $(document).off('ajaxComplete.waitforservicewidget_waitForService');
    } catch (err) {
      TW.log.error('Wait For Service Before Destroy Error', err);
    }
  };

  this.findURL = function (options, debugMode) {
    var url;
    var waitingURLs = thisWidget.getProperty('waitingURLs');

    if (waitingURLs) {
      url = waitingURLs.split(",").find(url => options.url.indexOf(url.trim()) !== -1);

      if (debugMode && url) {
        console.log("Wait For Service -> url " + options.url + " found in waitingURLs, url accepted");
      }
    }

    return url;
  };
};