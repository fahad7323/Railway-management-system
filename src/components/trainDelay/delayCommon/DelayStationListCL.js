import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SkeletonModel from 'src/components/subCommon/SkeletonModel';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function DelayStationListCL() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1, display: 'flex'
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Kolkata" {...a11yProps(0)} />
        <Tab label="Howrah" {...a11yProps(1)} />
        <Tab label="Barddhman" {...a11yProps(2)} />
        <Tab label="Durgapur" {...a11yProps(3)} />
        <Tab label="Asansol" {...a11yProps(4)} />
        <Tab label="Bandel" {...a11yProps(5)} />
        <Tab label="Delhi" {...a11yProps(6)} />
        <Tab label="Mumbai" {...a11yProps(7)} />
        <Tab label="Goa" {...a11yProps(8)} />
        <Tab label="Lucknow" {...a11yProps(9)} />
        <Tab label="UtterPardesh" {...a11yProps(10)} />
        <Tab label="Saktighar" {...a11yProps(11)} />
        <Tab label="Kerla" {...a11yProps(12)} />
        <Tab label="punjab" {...a11yProps(13)} />
        <Tab label="Pune" {...a11yProps(14)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={10}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={11}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={12}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={13}>
        <SkeletonModel />
      </TabPanel>
      <TabPanel value={value} index={14}>
        <SkeletonModel />
      </TabPanel>
    </Box>
  );
}
