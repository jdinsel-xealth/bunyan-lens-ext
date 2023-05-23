import React from "react"
import { Renderer } from "@k8slens/extensions"
import { PodLogs } from "./pod-logs"

type Pod = Renderer.K8sApi.Pod

interface State {
  pod: Pod
  containerNames: Set<string>
}

export class PodLogsMenuItem extends React.Component<
  Renderer.Component.KubeObjectMenuProps<Pod>,
  State
> {
  pod: Pod

  protected dStore = Renderer.K8sApi.apiManager.getStore(
    Renderer.K8sApi.podsApi
  ) as Renderer.K8sApi.PodsStore

  constructor(props: Renderer.Component.KubeObjectMenuProps<Pod>) {
    super(props)
    this.pod = props.object
    this.state = {
      pod: null,
      containerNames: new Set(),
    }
  }

  async componentDidMount() {

    // Get all containers in the pod
    const containerNameList = PodLogs.getContainersByPodList(this.pod)

    // Update state
    this.setState({
      pod: this.pod,
      containerNames: containerNameList,
    })
  }

  render() {
    const { containerNames } = this.state

    // Show menu item only if pod has at least 1 container
    if (!this.pod || this.pod.getContainers().length <= 0) {
      return null
    }

    // Render menu item UI (and associate onClick action)
    return PodLogs.uiMenu(
      this.props,
      containerNames,
      this.pod.getNs(),
      this.pod.getName(),
      "Logs"
    )
  }
}
