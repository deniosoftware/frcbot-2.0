import { View } from "@slack/types";

export function subscribeModal(): View {
  return {
    type: "modal",
    title: {
      type: "plain_text",
      text: "Subscribe to an event",
    },
    submit: {
      type: "plain_text",
      text: "Save",
    },
    callback_id: "subscribe_event",
    blocks: [
      {
        type: "input",
        block_id: "event",
        element: {
          type: "plain_text_input",
          action_id: "event",
          placeholder: {
            type: "plain_text",
            text: "e.g. 2020mabos",
          },
        },
        label: {
          type: "plain_text",
          text: "Event Code",
        },
      },
      {
        type: "input",
        block_id: "channel",
        element: {
          type: "channels_select",
          action_id: "channel",
          placeholder: {
            type: "plain_text",
            text: "Select one...",
          },
        },
        label: {
          type: "plain_text",
          text: "Channel",
        },
      },
      {
        type: "input",
        block_id: "notification_types",
        element: {
          type: "multi_static_select",
          action_id: "notification_types",
          placeholder: {
            type: "plain_text",
            text: "Select some...",
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "Match Score",
              },
              value: "match_score",
            },
            {
              text: {
                type: "plain_text",
                text: "Upcoming Match",
              },
              value: "upcoming_match",
            },
            {
              text: {
                type: "plain_text",
                text: "Event Schedule",
              },
              value: "event_schedule",
            },
          ],
          initial_options: [
            {
              text: {
                type: "plain_text",
                text: "Match Score",
              },
              value: "match_score",
            },
          ],
        },
        label: {
          type: "plain_text",
          text: "Notification Types",
        },
      },
      {
        type: "input",
        block_id: "type",
        element: {
          type: "static_select",
          action_id: "type",
          options: [
            {
              text: {
                type: "plain_text",
                text: "All matches",
              },
              value: "all",
            },
            {
              text: {
                type: "plain_text",
                text: "Just your team + additional teams",
              },
              value: "team",
            },
          ],
          initial_option: {
            text: {
              type: "plain_text",
              text: "All matches",
            },
            value: "all",
          },
        },
        label: {
          type: "plain_text",
          text: "Matches",
        },
      },
    ],
  };
}