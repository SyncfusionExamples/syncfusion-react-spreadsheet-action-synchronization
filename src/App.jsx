import * as React from 'react';
import { SheetsDirective, SheetDirective, ColumnsDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-spreadsheet';
import { ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './data';
import './App.css'

const Default = () => {
    //Instance of first spreadsheet.
    const spreadsheet1 = React.useRef(null);
    //Instance of second spreadsheet.
    const spreadsheet2 = React.useRef(null);
    
    const onActionComplete1 = (args) => {
        //Update First Spreadsheet action to Second Spreadsheet using the updateAction method.
        spreadsheet2.current.updateAction({
          action: args.action,
          eventArgs: args.eventArgs,
        });
      };
      const onActionComplete2 = (args) => {
        //Update Second Spreadsheet action to First Spreadsheet using the updateAction method.
        spreadsheet1.current.updateAction({
          action: args.action,
          eventArgs: args.eventArgs,
        });
      };
    return (<div className='control-pane'>
            <div className='control-section spreadsheet-control'>
                <h2>Spreadsheet 1: </h2>
                <SpreadsheetComponent openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open' saveUrl='https://services.syncfusion.com/react/production/api/spreadsheet/save' ref={spreadsheet1} actionComplete={onActionComplete1}>
                    <SheetsDirective>
                        <SheetDirective name="Car Sales Report">
                            <RangesDirective>
                                <RangeDirective dataSource={defaultData}></RangeDirective>
                            </RangesDirective>
                            <ColumnsDirective>
                                <ColumnDirective width={180}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={180}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={120}></ColumnDirective>
                            </ColumnsDirective>
                        </SheetDirective>
                    </SheetsDirective>
                </SpreadsheetComponent>
            </div>
            <br/>
            <div className='control-section spreadsheet-control'>
                <h2>Spreadsheet 2: </h2>
                <SpreadsheetComponent openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open' saveUrl='https://services.syncfusion.com/react/production/api/spreadsheet/save' ref={spreadsheet2} actionComplete={onActionComplete2}>
                    <SheetsDirective>
                        <SheetDirective name="Car Sales Report">
                            <RangesDirective>
                                <RangeDirective dataSource={defaultData}></RangeDirective>
                            </RangesDirective>
                            <ColumnsDirective>
                                <ColumnDirective width={180}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={180}></ColumnDirective>
                                <ColumnDirective width={130}></ColumnDirective>
                                <ColumnDirective width={120}></ColumnDirective>
                            </ColumnsDirective>
                        </SheetDirective>
                    </SheetsDirective>
                </SpreadsheetComponent>
            </div>
        </div>);
}
export default Default;
