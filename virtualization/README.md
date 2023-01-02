# Virtualization

- hardware virtualization or platform virtualization refers to the creation of a virtual machine that acts like a real computer with an operating system.
- in hardware virtualization, the host machine is the machine that is used by the virtualization and the guest machine is the virtual machine. The words host and guest are used to distinguish the software that runs on the physical machine from the software that runs on the virtual machine.
- the software or firmware that creates a virtual machine on the host hardware is called a hypervisor or virtual machine monitor
- different types of hardware virtualization include:
  - full virtualization
    - almost complete simulation of the actual hardware to allow software environments, including a guest operating system and its apps, to run unmodified
  - paravirtualization
    - the guest apps are executed in their own isolated domains, as if they are running on a separate system, but a hardware environment is not simulated. Guest programs need to be specifically modified to run this environment