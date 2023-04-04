import "../Dashboard/Dashboard.css";
import { useEffect, useState } from "react";

import { fetchInfos, fetchActivity, fetchAverageSession, fetchInformationScore, fetchInformationUserInfo, fetchPerformance } from "../../api/apiFormater";

import logo from '../../assets/logo/logoFull.svg'

import SideBarCategory from "../../components/SideBarCategory/SideBarCategory";
import StatsCard from "../../components/StatsCard/StatsCard";

import Score from "../../components/Graphs/Score/Score";
import Intensity from "../../components/Graphs/Intensity/Intensity";
import AverageSession from "../../components/Graphs/AverageSession/AverageSession";
import DailySession from "../../components/Graphs/DailySessions/DailySession";

import PropTypes from 'prop-types'
/**
 * generate the dashboard page
 * @param {*} param0 id of the user and mock boolean
 * @returns React Element
 */
export default function Dashboard({id, mocked}) {
    const [user, setUser] = useState()
    const [userIntensity, setUserIntensity] = useState()
    const [userSession, setUserSession] = useState()
    const [userDaily, setUserDaily] = useState()
    
    const [userInfos, setUserInfo] = useState()
    const [userScore, setUserScore] = useState()

    console.log()

    
  useEffect(() => {
    fetchInformationUser()
  }, [])

  async function fetchInformationUser () {
    // StatsCards
    const info = await fetchInfos(id, mocked)
    setUserInfo(info)

    // Name
    const infoUser = await fetchInformationUserInfo(id, mocked)
    setUser(infoUser)

    // DailyGraph
    const infoUserDaily = await fetchActivity(id, mocked)
    setUserDaily(infoUserDaily)

    // SessionGraph
    const infoUserSession = await fetchAverageSession(id, mocked)
    setUserSession(infoUserSession)

    // ScoreGraph
    const infoUserScore = await fetchInformationScore(id, mocked)
    setUserScore(infoUserScore)

    // IntensityGraph
    const infoUserIntensity = await fetchPerformance(id, mocked)
    setUserIntensity(infoUserIntensity)
  }

    return (
        <div className="app-wrapper">
            <header>
                <nav>
                    <ul>
                        <li className="logo">
                            <img src={logo} alt="Logo du site" />
                        </li>
                        <li>Accueil</li>
                        <li>Profil</li>
                        <li>Réglages</li>
                        <li>Communauté</li>
                    </ul>
                </nav>
            </header>
            <main className="layout">
                <div className="sidebar">
                    <div className="categories">
                        <SideBarCategory type="meditation"/>
                        <SideBarCategory type="natation" />
                        <SideBarCategory type="bicycle" />
                        <SideBarCategory type="strength" />
                    </div>
                    <div className="copyright">
                        <span>Copiryght, SportSee 2020</span>
                    </div>
                </div>
                <div className="dashboard">
                    <div className="user-profile">
                        <h1>Bonjour <span>{user && user.firstName}</span></h1>
                        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className="user-stats">
                        <div className="graphs">
                            <div className="main-stats">
                                <div className="graph">
                                    {userDaily && <DailySession data={userDaily} />}
                                </div>
                            </div>
                            <div className="secondary-stats">
                                <div className="graph">
                                    {userSession && <AverageSession data={userSession} />}
                                </div>
                                <div className="graph">
                                    {userIntensity && <Intensity data={userIntensity} />}
                                    
                                </div>
                                <div className="graph">
                                    {userScore && <Score data={userScore} />}
                                </div>
                            </div>
                        </div>
                        <div className="cards">
                            <StatsCard type="calories" value={userInfos && userInfos.calorieCount} />
                            <StatsCard type="glucides" value={userInfos && userInfos.carbohydrateCount} />
                            <StatsCard type="lipides" value={userInfos && userInfos.lipidCount} />
                            <StatsCard type="proteines" value={userInfos && userInfos.proteinCount} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

Dashboard.propTypes = {
    id: PropTypes.string.isRequired,
    mocked: PropTypes.bool.isRequired,
}