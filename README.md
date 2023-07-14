# WaitForServiceWidget
An extension to wait for a service to be completed.

**This Extension is provided as-is and without warranty or support. It is not part of the PTC product suite and there is no PTC support.**

## Description
This extension provides a widget to wait for a service to be completed. Differently from the ServiceInvokeCompleted approach, this extension can be used "cross mashup" inserting it (for example) in a Master mashup.
Of course, the widget cannot work properly on browser refresh or session timeout.

## Properties
- debugMode - BOOLEAN (default = false): if set to true it sends to the browser's JS console a set of information useful for debugging the widget
- waitingURLs - STRING (default = ''): the services to be waited represented by the respective (partial) URLs separated by commas, eg. '/PlatformSubsystem/Services/GetAllStyleDefinitions, /SystemRepository/Services/BrowseDirectory', if empty the widget will not wait any service
- startedURL - STRINT (default = ''): the started service represented by its (partial) URL as provided in the property waitingURLs, eg. '/PlatformSubsystem/Services/GetAllStyleDefinitions'
- completedURL - STRINT (default = ''): the completed service represented by its (partial) URL as provided in the property waitingURLs, eg. '/PlatformSubsystem/Services/GetAllStyleDefinitions'

## Services
- Start: service to initialize the widget, typically bound to the master's Loaded event

## Events
- Started: event to notify the widget is started
- WaitingStarted: event to notify that the widget has started to wait for a service
- WaitingCompleted: event to notify that the widget has completed to wait for a service

## Donate
If you would like to support the development of this and/or other extensions, consider making a [donation](https://www.paypal.com/donate/?business=HCDX9BAEYDF4C&no_recurring=0&currency_code=EUR).
