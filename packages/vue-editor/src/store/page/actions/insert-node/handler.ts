import { Action } from "vuex";
import State from "../../state";
import { findNode } from '../../helpers';
import InsertNodePayload from './payload';
import { mutationTypes } from '../..';
import { TargetPosition } from "../../../../enums";
import { Node } from "@pagebuilder/core";

const insertNode: Action<State, InsertNodePayload> = ({state, commit}, payload: InsertNodePayload) => {

  const parent: Node = payload.ref.parent;

  switch(payload.position) {
    case TargetPosition.Before:
      parent.insertChildBefore(payload.node, payload.ref);
      break;
    case TargetPosition.After:
      parent.insertChildAfter(payload.node, payload.ref);
      break;
  }
}

export default insertNode;