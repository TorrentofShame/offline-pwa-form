import React from "react";
import PropTypes from "prop-types";
import Section from "_components/Section";

class Form extends React.Component {
  constructor(props) {
    super(props);

    const config = this.props.config;
    const defaultSection = config[config.defaultSection];

    this.state = {
      sections: [defaultSection],
      secIDs: [config.defaultSection],
      secNum: 0,
      initialized: false,
      questIncs: {}
    };

    this.nextSection = this.nextSection.bind(this);
    this.previousSection = this.previousSection.bind(this);
    this.includeSection = this.includeSection.bind(this);
    this.handleQuestIncs = this.handleQuestIncs.bind(this);
  }

  nextSection() {
    // TODO: Include sections using selected answers. Easier if you cannot go back, but not ideal
    this.setState((s) => ({...s, secNum: s.secNum + 1}));
  }

  previousSection() {
    this.setState((s) => ({...s, secNum: s.secNum - 1}));
  }

  includeSection(secID) {
    let newSec = this.props.config[secID];
    if (!this.state.secIDs.includes(secID)) {


      let newSections = [...this.state.sections, newSec];
      let newSecIDs = [...this.state.secIDs, secID];

      /* Include Sections that this section includes by default */
      if (newSec.include) {
        newSec.include.forEach((sid) => {
          newSections.push(this.props.config[sid]);
          newSecIDs.push(sid);
        });
      }

      this.setState((state) => ({...state,
        sections: newSections,
        secIDs: newSecIDs
      }));
    }
  }

  handleQuestIncs(name, value, secIDs) {
    this.setState((s) => ({...s, name: {value, secIDs}}));
  }

  render() {

    /* Include Sections that the default section includes by default */
    if (!this.state.initialized && this.state.sections[0].include) {
      this.state.sections[0].include.forEach(this.includeSection);
      this.setState((s) => ({...s, initialized: true}));
    }

    const onSubmit = this.props.onSubmit;
    const sections = this.state.sections;

    return(
      <main>
        {sections.map((sec, index) => (
          <Section
            key={this.state.secIDs[index]}
            previousSection={index > 0 ? this.previousSection : null}
            onSubmit={sections.length - 1 === index ? onSubmit : this.nextSection}
            isLast={sections.length - 1 === index}
            isVisible={this.state.secNum === index}
            handleQuestIncs={this.handleQuestIncs}
            {...sec}
          />
        ))}
      </main>
    );
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired
};

export default Form;
