import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    UserCircleIcon,
    ClipboardDocumentListIcon,
    RssIcon,
    NoSymbolIcon,
    DocumentTextIcon,
    UserGroupIcon,
    QuestionMarkCircleIcon,
    MagnifyingGlassCircleIcon,
    WrenchScrewdriverIcon,
    DocumentMagnifyingGlassIcon
  } from "@heroicons/react/24/solid";
   
  const Sidebar =()=> {
    return (
      <Card className="h-[calc(100vh-2rem)] w-full md:max-w-[15rem] lg:max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5 fixed top-16 md:top-20 border border-gray-400">
        <List>

          {/* Dashboard */}
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>

          {/* Task Queue */}
          <ListItem>
            <ListItemPrefix>
              <ClipboardDocumentListIcon className="h-5 w-5" />
            </ListItemPrefix>
            Task Queue
          </ListItem>

          {/* Network Provider */}
          <ListItem>
            <ListItemPrefix>
              <RssIcon className="h-5 w-5" />
            </ListItemPrefix>
            Network Provider
          </ListItem>

           {/*Non-Network Provider */}
           <ListItem>
            <ListItemPrefix>
              <NoSymbolIcon className="h-5 w-5" />
            </ListItemPrefix>
            Non-Network Provider
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <DocumentTextIcon className="h-5 w-5" />
            </ListItemPrefix>
            My Documents
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <UserGroupIcon className="h-5 w-5" />
            </ListItemPrefix>
            User Mangement
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <DocumentMagnifyingGlassIcon className="h-5 w-5" />
            </ListItemPrefix>
            Audit Trial
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <QuestionMarkCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Support
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <MagnifyingGlassCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Search
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <WrenchScrewdriverIcon className="h-5 w-5" />
            </ListItemPrefix>
            Master Configurator
          </ListItem>

        </List>
      </Card>
    );
  }

  export default Sidebar;



  
  