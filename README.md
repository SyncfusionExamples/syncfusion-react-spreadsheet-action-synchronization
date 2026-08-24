# React Spreadsheet Action Synchronization Sample

This sample demonstrates how to synchronize user actions between multiple Syncfusion React Spreadsheet instances. It uses the `actionComplete` event to capture user operations and the `updateAction` method to replicate those actions in another Spreadsheet instance.

The implementation provides a foundation for collaborative and multi-user editing scenarios where changes made in one Spreadsheet can be synchronized with another using a custom communication mechanism.

## Features

- Synchronize actions between two Spreadsheet instances.
- Capture user operations using the `actionComplete` event.
- Apply actions to another Spreadsheet using the `updateAction` method.
- Demonstrates the core workflow required for collaborative and multi-user editing solutions.
- Built with Syncfusion React Spreadsheet.

## Prerequisites

Before running the sample, ensure that the following software is installed:

- Node.js (Latest LTS version recommended)
- npm

## Running the Sample

### Install Dependencies

```bash
npm install
```

### Run the Sample

```bash
npm run dev
```

After the application starts, open the URL displayed in the terminal in your browser.

## Use Cases

- Synchronizing actions between multiple Spreadsheet instances.
- Building collaborative editing applications.
- Implementing real-time spreadsheet updates.
- Mirroring spreadsheet operations across users or sessions.

## References

- **Live Demo:** [action-synchronization](https://ej2.syncfusion.com/products/react/spreadsheet/action-synchronization/)
- **Documentation**: 
1. [Update Action API](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#updateaction)
2. [Action Complete Event](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#actioncomplete)