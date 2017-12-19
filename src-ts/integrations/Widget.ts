import { Integration } from "./Integration";
import WidgetRecord from "../db/models/WidgetRecord";

export interface EtherpadWidgetOptions {
    defaultUrl: string;
}

export class Widget extends Integration {
    public options: any;

    constructor(widgetRecord: WidgetRecord) {
        super(widgetRecord);
        this.category = "widget";
        this.options = widgetRecord.optionsJson ? JSON.parse(widgetRecord.optionsJson) : {};
        this.requirements = [{
            condition: "canSendEventTypes",
            argument: ["im.vector.widget"],
            expectedValue: true,
        }];
    }
}