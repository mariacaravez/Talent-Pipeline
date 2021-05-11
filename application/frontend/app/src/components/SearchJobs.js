import React from "react";
import { useState } from "react";
import {
  Dropdown,
  Input,
  Button,
  Card,
  Container,
  Image,
  Segment,
  Modal
} from "semantic-ui-react";
import Axios from "axios";
import "../App.css";

function Search() {
  const [textValue, setTextValue] = useState("");
  const [jobsList, setJobsList] = useState([]);
  const [openSearchResults, setOpenSearchResults] = useState(false);

  const getSearch = () => {
    //http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/search/jobs
    Axios.get("http://localhost:6480/search/jobs", {
      params: { jobdesc: textValue },
    }).then((response) => {
      console.log(response.data);
      console.log(textValue);
      setJobsList(response.data);
    });
  };
  //   Axios.get("http://ec2-18-188-8-216.us-east-2.compute.amazonaws.com:6480/search", {params: {textValue: textValue, optionsValue: optionsValue}}).then((response) => {
  //     console.log(response.data);
  //     console.log(textValue);
  //     setStudentList(response.data);
  //   });
  // }

  return (
    <div>
        <Input
        fluid
          type="text"
          placeholder="Search Job..."
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
          action
        >
          <input />
          <Modal
                basic
                dimmer="inverted"
                onClose={() => setOpenSearchResults(false)}
                onOpen={() => setOpenSearchResults(true)}
                open={openSearchResults}
                trigger={
                  <Button
                    style={{ backgroundColor: "#FBBE74" }}
                    onClick={getSearch}
                  >
                    Find Jobs
                  </Button>
                }
                className="responsive"
                size="large"
              >
                <Segment>
                  <Card.Group itemsPerRow={2}>
                    {jobsList.map((val, key) => {
                      return (
                        <Card>
                          <Card.Content textAlign="left">
                            <Card.Header>{val.workType}</Card.Header>
                            <Card.Meta>{val.company}</Card.Meta>
                            <Card.Description>{val.description}</Card.Description>
                          </Card.Content>
                        </Card>
                      );
                    })}
                  </Card.Group>
                </Segment>
              </Modal>
        </Input>

      {/* TODO: MOVE THIS TO A NEW PAGE */}
{/* 
      <Card.Group itemsPerRow={2}>
        {jobsList.map((val, key) => {
          return (
            <Card>
              <Card.Content textAlign="left">
                <Card.Header>{val.workType}</Card.Header>
                <Card.Meta>{val.company}</Card.Meta>
                <Card.Description>{val.description}</Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group> */}
    </div>
  );
}
export default Search;
