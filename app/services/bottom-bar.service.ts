import { Injectable } from "@angular/core";

@Injectable()
export class BottomBarService {
  public selectedTab = {
    index: 0,
    title: "Search"
  };
}
