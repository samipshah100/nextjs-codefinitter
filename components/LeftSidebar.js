import React from 'react'
import SidebarItem from '@/components/SidebarItem'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ExploreIcon from '@material-ui/icons/Explore'
import HomeIcon from '@material-ui/icons/Home'
import ChatIcon from '@material-ui/icons/Chat'
import { makeStyles } from '@material-ui/core/styles'

const sidebarList = [
  {
    icon: <HomeIcon />,
    label: 'Home',
  },
  {
    icon: <ExploreIcon />,
    label: 'Explore',
  },
  {
    icon: <NotificationsIcon />,
    label: 'Notifications',
  },
  {
    icon: <ChatIcon />,
    label: 'Messages',
  },
  {
    icon: <AccountBoxIcon />,
    label: 'Profile',
  },
]

export default function LeftSidebar() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {sidebarList.map((item) => (
        <SidebarItem item={item} key={item.label} />
      ))}
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // width: 150,
    marginLeft: 50,
    marginRight: 20,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
}))
