import { Node } from '@pagebuilder/core';
import { mapActions } from 'vuex';
import { actionTypes as pageActions } from '../../store/page';
import UpdateNodePayload from '../../store/page/actions/update-node/payload';

export default {
  props: {
    node: {
      type: Node,
      required: true,
    },
  },
  methods: {
    ...mapActions('page', [
      pageActions.UPDATE_NODE,
    ]),
    update(newData: Record<string, any>) {
      const payload: UpdateNodePayload = {
        node: this.node,
        newData
      };

      this[pageActions.UPDATE_NODE](payload);
    }
  }
}