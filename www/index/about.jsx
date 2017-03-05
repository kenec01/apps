/*global React io ReactBootstrap moment $ Babel*/
/*global React ReactDOM __ _  _i Immutable __Element*/


(() => {
  "use strict";

  //==============================
  const myPath = "index/about/";
  const __tabSelected = __()
    .__((tab) => {
      _i("tab", tab);
    });



  //--------------------------------
  const tabs = [];
  const __tab = __();

  const __dummy = __([__tabSelected])
    .__(([tabSelected]) => {
      //---------------
      _i("tabSelected", tabSelected);

      const dummy2 = tabs[tabSelected]
        ? __tab.t = tabSelected
        : (() => {
          _i("loadingJSX", tabSelected);
          $.get(myPath + tabSelected + ".jsx",
            (data) => {
              //------------------------
              eval(Babel.transform(data, {
                presets: ["latest", "react"]
              }).code);
              //------------------------
              __tab.t = tabs[tabSelected] = tabSelected;
            });

          return true;
        })();
        //----------------

      return tabSelected;
    });
    //================

  const mainPanel = () => {
    const __seqEl = __([__tab])
      .__(([tab]) => (

        <Grid>
            {window[tab]}
          </Grid>

      ));

    return __Element(__seqEl);
  };

  const tabMenu0 = (
  <Nav bsStyle="tabs">
              <NavItem >サイト情報</NavItem>
              <NavItem >特定商取引法の表記</NavItem>
              <NavItem >会社情報</NavItem>
    </Nav>  );

  const tabMenu = () => {

    const __seqEl = __([__tabSelected])
      .__(([tabSelected]) => (
        <Nav bsStyle="tabs"
        activeKey={tabSelected}
        onSelect={(eventKey) => {
          event.preventDefault();
          __tabSelected.t = eventKey;
        }}>
                  <NavItem eventKey={"site"} >サイト情報</NavItem>
                  <NavItem eventKey={"hyoki"} >特定商取引法の表記</NavItem>
                  <NavItem eventKey={"company"} >会社情報</NavItem>
        </Nav>
      ));

    return __Element(__seqEl);

  };


  //==============================


  // for FAQ
  //Accordions
  const accordionInstance = (
  <Accordion>
        <Panel header="Collapsible Group Item #1" eventKey="1">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven"t heard of them accusamus labore sustainable VHS.
        </Panel>
        <Panel header="Collapsible Group Item #2" eventKey="2">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven"t heard of them accusamus labore sustainable VHS.
        </Panel>
        <Panel header="Collapsible Group Item #3" eventKey="3">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven"t heard of them accusamus labore sustainable VHS.
        </Panel>
      </Accordion>
  );


  const TopElement = (<div>sdfdsffd
         {tabMenu()}
         {mainPanel()} </div>);
  window.about = TopElement ;


//==========================================
})();
