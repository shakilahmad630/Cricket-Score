import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { HistoryComponent } from './Pages/history/history.component';
import { LiveScoreComponent } from './Pages/live-score/live-score.component';
import { PointsTableComponent } from './Pages/points-table/points-table.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'/live-score',
        pathMatch:'full'
    },
    // {
    //     path :"home",
    //     component : HomeComponent,
    //     title :"Home - CricketScore"
    // },
    {
        path : "history",
        component:HistoryComponent,
        title : "Match History - CricketScore"
    },
    {
        path : "live-score",
        component:LiveScoreComponent,
        title :"Live-Score - CricketScore"
    },
    {
        path:"points-table",
        component:PointsTableComponent,
        title:"Points-Table - CricketScore"
    }
];
