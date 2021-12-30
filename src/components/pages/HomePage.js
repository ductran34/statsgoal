import { Grid, List, ListItem, Stack } from '@mui/material'
import React from 'react'
import HorizontalScroll from '../HorizontalScroll';
import Standing from '../Standing';
import HomeStyle from '../styles/HomeStyle'
import logo from '../../logo.svg';

function HomePage() {

    const homeStyle = HomeStyle();
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Stack className={homeStyle.item} direction="column" justifyContent="space-between" minWidth="20rem">
                        <Stack className={homeStyle.competitionList} direction="row" spacing={2} minWidth="20rem">
                            <img className={homeStyle.leagueIcon} src={logo} alt="logo" />
                            <img className={homeStyle.leagueIcon} src={logo} alt="logo" />
                            <img className={homeStyle.leagueIcon} src={logo} alt="logo" />
                        </Stack>
                        <Standing></Standing>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                <div className={homeStyle.item}>xs=4</div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className={homeStyle.item}>xs=4</div>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage
